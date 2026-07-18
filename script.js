let currentStep = 1;
function showStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
  document.getElementById('step' + n).classList.remove('hidden');
  if(n === 5) launchConfetti();
}

// Step 1
document.getElementById('yesBtn').onclick = () => showStep(2);
document.getElementById('noBtn').onmouseover = () => {
  const btn = document.getElementById('noBtn');
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
};

// Step 2
document.getElementById('next2').onclick = () => showStep(3);

// Step 3
document.getElementById('next3').onclick = () => showStep(4);

// Step 4
document.querySelectorAll('.rideBtn').forEach(btn => {
  btn.onclick = () => showStep(5);
});

// Confetti
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let pieces = [];
  for(let i=0; i<150; i++) {
    pieces.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height-100, 
      r:Math.random()*6+4, d:Math.random()*150, color:`hsl(${Math.random()*360},100%,50%)`});
  }
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.color;
      ctx.fill();
      p.y += 3;
      if(p.y > canvas.height) p.y = -10;
    });
    requestAnimationFrame(draw);
  }
  draw();
}