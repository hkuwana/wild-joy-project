// Original SVG studies: outlined forms, fine veins and graphite-like hatching.
// All artwork is decorative; there are no external image or font dependencies.
const f = n => Number(n.toFixed(2));
const svg = (w,h,body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="none"><g stroke="#795a39" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;
const path = (d,width=1,opacity=.7) => `<path d="${d}" stroke-width="${width}" opacity="${opacity}"/>`;
function palm(){
 let art=path('M74 713 C123 573 199 416 302 230 C339 163 370 110 423 48',2.2,.7);
 art+=path('M78 711 C131 571 203 420 306 232 C344 164 375 107 423 48',.7,.35);
 for(let i=0;i<23;i++){
  const t=i/24, x=104+310*t,y=640-560*t;
  const width=155*Math.sin(Math.PI*(t*.82+.1))+15;
  for(const side of [-1,1]){
   const ex=x+side*width,ey=y-95-55*t, midx=x+side*width*.65;
   art+=path(`M${f(x)} ${f(y)} C${f(midx)} ${f(y-20)} ${f(ex+side*12)} ${f(ey+40)} ${f(ex)} ${f(ey)} C${f(ex-side*28)} ${f(ey+14)} ${f(x+side*12)} ${f(y-19)} ${f(x)} ${f(y)} Z`,1,.63);
   art+=path(`M${f(x)} ${f(y)} Q${f(midx)} ${f(y-45)} ${f(ex)} ${f(ey)}`,.6,.48);
   for(let k=1;k<5;k++){
    const u=k/5,bx=x+(ex-x)*u,by=y+(ey-y)*u;
    art+=path(`M${f(bx)} ${f(by+9*(1-u))} l${f(side*11*(1-u))} ${f(-9*(1-u))}`,.45,.33);
   }
  }
 }
 return svg(580,750,art);
}
function shell(){
 let art=path('M149 230 C121 217 80 225 53 200 C12 168 13 110 35 84 C48 64 61 61 76 61 C82 32 116 21 143 39 C161 10 198 15 211 42 C241 23 270 42 270 72 C303 70 324 100 313 129 C337 151 318 190 292 201 C270 219 223 211 194 232 L187 257 Q166 249 147 258 Z',1.9,.8);
 for(let i=0;i<27;i++){
  const angle=Math.PI+(i/26)*Math.PI;
  const x=173+143*Math.cos(angle),y=183+145*Math.sin(angle);
  art+=path(`M${f(166+(i-13)*.7)} ${f(235+Math.sin(i)*2)} Q${f(173+(x-173)*.5)} ${f(y+45)} ${f(x)} ${f(y)}`,.6+(i%4)*.15,.45+(i%3)*.12);
  if(i%2===0)art+=path(`M${f(168+(i-13)*.7)} 234 Q${f(177+(x-173)*.5)} ${f(y+49)} ${f(x+2)} ${f(y+3)}`,.4,.22);
 }
 for(let i=0;i<6;i++)art+=path(`M${147+i*2} ${241+i*2} Q168 ${236+i*3} ${188-i} ${241+i*2}`,.7,.55);
 return svg(350,280,art);
}
function sun(){
 let art='';
 for(let i=0;i<3;i++)art+=`<ellipse cx="150" cy="145" rx="${69+i*2}" ry="${70-i}" transform="rotate(${i*8} 150 145)" stroke-width="${i?'.7':'1.3'}" opacity="${i?'.35':'.7'}"/>`;
 for(let i=0;i<28;i++){
  const a=i*Math.PI/14,inner=94+(i%3)*2,outer=116+(i%4)*5;
  art+=path(`M${f(150+Math.cos(a)*inner)} ${f(145+Math.sin(a)*inner)} L${f(150+Math.cos(a+.008)*outer)} ${f(145+Math.sin(a+.008)*outer)}`,.9,.55);
 }
 for(let i=0;i<16;i++){let y=87+i*8,dx=Math.sqrt(Math.max(0,65**2-(y-145)**2));art+=path(`M${f(150-dx)} ${y} Q150 ${y+3} ${f(150+dx)} ${y+1}`,.5,.2);}
 return svg(300,290,art);
}
function waves(){
 let art='';
 for(let i=0;i<5;i++)art+=path(`M5 ${35+i*12} C55 ${4+i*12} 77 ${70+i*12} 132 ${35+i*12} S210 ${4+i*12} 260 ${35+i*12} S340 ${70+i*12} 395 ${35+i*12}`,1-i*.1,.6-i*.07);
 return svg(400,120,art);
}
export const illustrations={'palm-study.svg':palm(),'shell-study.svg':shell(),'sun-study.svg':sun(),'wave-study.svg':waves()};
