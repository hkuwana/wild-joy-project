import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const source=readFileSync(new URL('../site/app.js',import.meta.url),'utf8');
function harness({reduced=false,saved=null,storageBlocked=false,width=1440}={}) {
  const events={}, documentEvents={}, frames=new Map(), offsets=new Map();
  const attributes={}, label={}, root={dataset:{}}, media={matches:reduced};
  let nextFrame=0;
  const layer={dataset:{depth:'120'},style:{setProperty:(k,v)=>offsets.set(k,v),removeProperty:k=>offsets.delete(k)}};
  const rect={top:0,bottom:900,height:900};
  const scene={querySelectorAll:()=>[layer],getBoundingClientRect:()=>rect};
  const button={setAttribute:(k,v)=>{attributes[k]=v;},querySelector:()=>label,addEventListener:(name,fn)=>{button[name]=fn;}};
  const document={hidden:false,documentElement:root,querySelector:s=>s==='.motion-control'?button:null,querySelectorAll:s=>s==='[data-parallax-scene]'?[scene]:[],addEventListener:(name,fn)=>{documentEvents[name]=fn;}};
  const window={innerWidth:width,innerHeight:1000,matchMedia:()=>media,addEventListener:(name,fn)=>{events[name]=fn;}};
  media.addEventListener=(name,fn)=>{media[name]=fn;};
  const storage={value:saved,getItem(){if(storageBlocked)throw Error('Unavailable');return this.value;},setItem(k,v){if(storageBlocked)throw Error('Unavailable');this.value=v;}};
  vm.runInNewContext(source,{document,window,localStorage:storage,requestAnimationFrame:fn=>{const id=++nextFrame;frames.set(id,fn);return id;},cancelAnimationFrame:id=>frames.delete(id)});
  const flush=()=>{const pending=[...frames.values()];frames.clear();pending.forEach(fn=>fn());};
  return {events,documentEvents,frames,offsets,root,media,rect,button,attributes,label,storage,document,flush};
}
test('system reduced motion disables depth before any animation frame',()=>{
  const h=harness({reduced:true});
  assert.equal(h.root.dataset.motion,'off');assert.equal(h.button.disabled,true);assert.equal(h.frames.size,0);assert.equal(h.label.textContent,'Motion reduced');
});
test('saved off preference stays off and toggling remains reversible',()=>{
  const h=harness({saved:'off'});assert.equal(h.frames.size,0);
  h.button.click();assert.equal(h.root.dataset.motion,'on');h.flush();assert.ok(h.offsets.size);
  h.button.click();assert.equal(h.root.dataset.motion,'off');assert.equal(h.offsets.size,0);assert.equal(h.storage.value,'off');assert.equal(h.attributes['aria-pressed'],'false');
});
test('scroll work is coalesced, bounded, and never becomes an idle loop',()=>{
  const h=harness();h.flush();const before=h.offsets.get('--parallax-y');
  h.rect.top=-500;h.rect.bottom=400;
  for(let i=0;i<20;i++)h.events.scroll();assert.equal(h.frames.size,1);
  h.flush();assert.notEqual(h.offsets.get('--parallax-y'),before);assert.equal(h.frames.size,0);
  assert.ok(Math.abs(parseFloat(h.offsets.get('--parallax-y')))<=78);
});
test('changing OS preference cancels queued work and restores static art',()=>{
  const h=harness();h.flush();h.events.scroll();
  h.media.matches=true;h.media.change();assert.equal(h.frames.size,0);assert.equal(h.offsets.size,0);assert.equal(h.button.disabled,true);
  h.media.matches=false;h.media.change();assert.equal(h.root.dataset.motion,'on');assert.equal(h.button.disabled,false);
});
test('hidden documents stop work, and blocked storage is non-fatal',()=>{
  const h=harness({storageBlocked:true});h.document.hidden=true;h.documentEvents.visibilitychange();assert.equal(h.frames.size,0);
  h.events.scroll();assert.equal(h.frames.size,0);h.button.click();assert.equal(h.root.dataset.motion,'off');
});
test('phone displacement is smaller and offscreen scenes are not updated',()=>{
  const desktop=harness(),mobile=harness({width:390});desktop.flush();mobile.flush();
  assert.ok(Math.abs(parseFloat(mobile.offsets.get('--parallax-y')))<Math.abs(parseFloat(desktop.offsets.get('--parallax-y'))));
  const before=mobile.offsets.get('--parallax-y');mobile.rect.top=1400;mobile.rect.bottom=2300;mobile.events.scroll();mobile.flush();assert.equal(mobile.offsets.get('--parallax-y'),before);
});
