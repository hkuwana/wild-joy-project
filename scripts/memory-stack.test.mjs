import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync(new URL('../site/memory-stack.js',import.meta.url),'utf8');
function harness({motion='on',roomy=true,reduced=false,missing=false,throws=false}={}) {
  const style=()=>({setProperty(k,v){this[k]=v;},removeProperty(k){delete this[k];}});
  const anchors=Array.from({length:3},()=>({style:style()}));
  const cards=anchors.map(anchor=>({style:style(),querySelector:()=>anchor,prepend(a){a.parent=this;}}));
  const track={querySelectorAll:()=>cards,append(a){a.parent=this;}};
  anchors.forEach((a,i)=>{a.parent=cards[i];});
  const links=cards.map(()=>({setAttribute(k,v){this[k]=v;},removeAttribute(k){delete this[k];}}));
  const root={dataset:{motion}},journey={style:style()},events={},media=[{matches:roomy},{matches:reduced}];
  media.forEach(m=>{m.addEventListener=(event,fn)=>{m[event]=fn;};});
  let sync,callback,subscriptions=0,stops=0;
  const lib={scroll(fn){if(throws)throw Error('unsupported');subscriptions++;callback=fn;return()=>{stops++;};}};
  const window={innerHeight:844,WildJoyMotion:missing?undefined:lib,matchMedia:q=>q.includes('min-height')?media[0]:media[1],addEventListener:(k,fn)=>{events[k]=fn;}};
  const document={documentElement:root,querySelector:q=>q==='[data-memory-stack]'?track:journey,querySelectorAll:()=>links};
  vm.runInNewContext(source,{window,document,MutationObserver:class{constructor(fn){sync=fn;}observe(){}}});
  return {root,cards,anchors,track,links,journey,events,media,sync:()=>sync?.(),draw:p=>callback(p),counts:()=>({subscriptions,stops})};
}
test('missing library, reduced motion, short viewport and saved-off keep the flowing notebook',()=>{
  for(const options of [{missing:true},{reduced:true},{roomy:false},{motion:'off'}]) {
    const h=harness(options);assert.equal(h.root.dataset.stack,undefined);assert.equal(h.counts().subscriptions,0);
    h.anchors.forEach((a,i)=>assert.equal(a.parent,h.cards[i]));
  }
});
test('stack assembles in order, reverses deterministically, and clamps progress',()=>{
  const h=harness();h.draw(0);const first=h.cards.map(c=>c.style.transform);
  assert.equal(h.cards[0].style.opacity,'1');assert.equal(h.cards[2].style.opacity,'0');
  h.draw(.5);assert.equal(h.cards[1].style.opacity,'1');assert.equal(h.links[1]['aria-current'],'step');
  h.draw(1);assert.equal(h.cards[2].style.opacity,'1');assert.equal(h.links[2]['aria-current'],'step');const last=h.cards.map(c=>c.style.transform);
  h.draw(5);assert.deepEqual(h.cards.map(c=>c.style.transform),last);
  h.draw(-1);assert.deepEqual(h.cards.map(c=>c.style.transform),first);
});
test('motion-off cleans subscription, card styles, route and anchor positions; re-enable does not duplicate',()=>{
  const h=harness();h.draw(.6);h.root.dataset.motion='off';h.sync();
  assert.equal(h.counts().stops,1);assert.equal(h.root.dataset.stack,undefined);
  h.cards.forEach((c,i)=>{assert.equal(c.style.transform,undefined);assert.equal(c.style.opacity,undefined);assert.equal(h.anchors[i].parent,c);});
  assert.equal(h.journey.style['--route-progress'],undefined);
  h.root.dataset.motion='on';h.sync();h.sync();assert.equal(h.counts().subscriptions,2);
  h.anchors.forEach(a=>assert.equal(a.parent,h.track));
});
test('OS and viewport changes restore static content, printing restores the active stack afterward',()=>{
  const h=harness();h.media[1].matches=true;h.media[1].change();assert.equal(h.root.dataset.stack,undefined);
  h.media[1].matches=false;h.media[1].change();assert.equal(h.root.dataset.stack,'on');
  h.media[0].matches=false;h.media[0].change();assert.equal(h.root.dataset.stack,undefined);
  h.media[0].matches=true;h.media[0].change();h.events.beforeprint();assert.equal(h.root.dataset.stack,undefined);
  h.events.afterprint();assert.equal(h.root.dataset.stack,'on');
});
test('initialization error restores readable content instead of leaving a partial stack',()=>{
  const h=harness({throws:true});assert.equal(h.root.dataset.stack,undefined);
  h.cards.forEach((c,i)=>{assert.equal(c.style.opacity,undefined);assert.equal(h.anchors[i].parent,c);});
});
