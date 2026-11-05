import {readFile, readdir, stat} from 'node:fs/promises';
import {resolve, extname} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');
async function files(dir){const entries=await readdir(dir,{withFileTypes:true});return(await Promise.all(entries.map(item=>item.isDirectory()?files(resolve(dir,item.name)):resolve(dir,item.name)))).flat();}
const all=await files(root);
const htmlFiles=all.filter(file=>extname(file)==='.html');
let checked=0;
for(const file of htmlFiles){
 const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1\b/g)||[]).length,1,`${file}: exactly one h1`);
 assert.ok(html.includes('lang="en"'),`${file}: document language`);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,`${file}: unique IDs`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const href=match[1];if(/^(https?:|mailto:)/.test(href))continue;
  const [path,anchor]=href.split('#');
  let target=path?resolve(root,'.'+path):file;
  if((await stat(target)).isDirectory())target=resolve(target,'index.html');
  await stat(target);
  if(anchor){const targetHtml=await readFile(target,'utf8');assert.ok(targetHtml.includes(`id="${anchor}"`),`Missing anchor: ${href}`);}
  checked++;
 }
}
for(const file of all.filter(file=>extname(file)==='.css')){
 const css=await readFile(file,'utf8');
 for(const match of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)){await stat(resolve(root,'.'+match[1]));checked++;}
}
const content=JSON.parse(await readFile('content.json','utf8'));
assert.equal(content.retreat.itinerary.length,8,'All eight days included');
assert.equal(content.retreat.rooms.length,2,'Both room types included');
const bali=await readFile(resolve(root,'bali2027/index.html'),'utf8');
for(const phrase of ['non-swimmers','certified divers','trip confirmation','Travel insurance','Gratuities']) assert.ok(bali.includes(phrase),`Missing material detail: ${phrase}`);
const ics=await readFile(resolve(root,'bali-retreat.ics'),'utf8');
assert.ok(ics.includes('DTSTART;VALUE=DATE:20270523'));
assert.ok(ics.includes('DTEND;VALUE=DATE:20270531'),'Calendar end is exclusive');
assert.ok(ics.includes('STATUS:TENTATIVE'));
console.log(`Checked ${htmlFiles.length} HTML documents and ${checked} local references; itinerary, suitability, room types, and calendar passed.`);
