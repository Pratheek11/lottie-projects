var anim = bodymovin.loadAnimation({
    container: document.getElementById('s'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json'
})

s.addEventListener('mouseenter', ()=>{
    anim.setDirection(1);
    anim.play();
})
s.addEventListener('mouseleave', ()=>{
    anim.setDirection(-1);
    anim.play();
})

var sec = bodymovin.loadAnimation({
    container: document.getElementById('t'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'tick.json'
})
t.addEventListener('mouseenter', ()=>{
    sec.setDirection(1);
    sec.play();
})
t.addEventListener('mouseleave', ()=>{
    sec.setDirection(-1);
    sec.play();
})

var thir = bodymovin.loadAnimation({
    container: document.getElementById('nb'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'next and back.json'
})
nb.addEventListener('mouseenter', ()=>{
   thir.setDirection(1);
   thir.play();
})
nb.addEventListener('mouseleave', ()=>{
   thir.setDirection(-1);
   thir.play();
})