(() => {
 const canvas=document.getElementById('heroPixels'),ctx=canvas.getContext('2d');if(!ctx)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let width=0,height=270,frame=0,visible=true,t=0,last=0;
 let pointer={x:-1000,y:-1000};
 function resize(){width=canvas.clientWidth;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
 function draw(){ctx.clearRect(0,0,width,height);for(let y=0;y<height;y+=9)for(let x=0;x<width;x+=9){const n=(Math.sin(x*12.9898+y*78.233)*43758.5453)%1;const glow=Math.max(0,1-Math.hypot(x-pointer.x,y-pointer.y)/130);const a=(.08+Math.abs(n)*.24)*(0.6+0.4*Math.sin(t+x*.013+y*.021));ctx.fillStyle=glow>.1?`rgba(210,166,0,${a+glow*.3})`:`rgba(100,100,105,${a})`;ctx.fillRect(x,y,3+Math.abs(n)*3,3+Math.abs(n)*3)}}
 function tick(now){frame=0;if(!visible||document.hidden||reduced.matches)return;if(now-last>45){t+=.035;draw();last=now}frame=requestAnimationFrame(tick)}
 function sync(){cancelAnimationFrame(frame);frame=0;draw();if(visible&&!document.hidden&&!reduced.matches)frame=requestAnimationFrame(tick)}
 new ResizeObserver(resize).observe(canvas);
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()}).observe(canvas);
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
 document.querySelector('.pixel-hero').addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();pointer={x:e.clientX-r.left,y:e.clientY-r.top};if(reduced.matches)draw()},{passive:true});
 document.querySelector('.pixel-hero').addEventListener('pointerleave',()=>{pointer={x:-1000,y:-1000}});
 resize();sync();
})();
