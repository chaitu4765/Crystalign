const {chromium}=require('playwright');
const fs=require('node:fs/promises');
const path=require('node:path');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1000,height:480},deviceScaleFactor:1});
 page.on('pageerror',e=>console.error(e));
 await page.goto('http://127.0.0.1:8000/tools/alignment-generator/scene.html');
 await page.waitForFunction(()=>window.alignmentReady,{timeout:60000});
 const frames=process.argv.includes('--preview')?[0,30,60]:Array.from({length:61},(_,i)=>i);
 for(const frame of frames){
  const data=await page.evaluate(p=>window.renderAlignment(p),frame/60);
  await fs.writeFile(path.join(__dirname,'../../assets/alignment',`frame-${String(frame).padStart(3,'0')}.webp`),Buffer.from(data.split(',')[1],'base64'));
  if(frame%10===0)console.log(`Rendered ${frame}/60`);
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
