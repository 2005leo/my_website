// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      const el=document.querySelector(id);
      if(el){e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'});}
    }
  })
})

// Year
document.getElementById('year').textContent=new Date().getFullYear();

// Contact validation demo
const form=document.getElementById('contactForm');
const note=document.getElementById('formNote');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=(data.get('name')||'').trim();
  const email=(data.get('email')||'').trim();
  const message=(data.get('message')||'').trim();
  if(!name || !email || !message){
    note.textContent='Please complete all fields.'; return;
  }
  const ok=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  if(!ok){note.textContent='Please enter a valid email.'; return}
  note.textContent='Thanks! This demo form does not send yet.';
  form.reset();
});

// Animated dots
const animateDots = () => {
  document.querySelectorAll('.btn .dot').forEach((dot,i)=>{
    const t=Date.now()/1000 + i*0.6;
    const x=Math.sin(t)*1.5; const y=Math.cos(t)*1.5;
    dot.style.transform=`translate(${x}px, ${y}px)`;
  });
  requestAnimationFrame(animateDots);
};
animateDots();
