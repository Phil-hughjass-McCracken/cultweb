// ----- Background Particles -----
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    dx: (Math.random()-0.5)*0.5,
    dy: (Math.random()-0.5)*0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(255,0,255,0.3)';
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

// ----- Dynamic Phillians -----
const phillians = [
  {name:"Phil",title:"High Prophet of Phil",bio:"Founder, chaos enthusiast, soda ritualist.",image:"assets/images/phillians/phil.png",social:"@mydihburns"},
  {name:"Phillipa",title:"Keeper of Rituals",bio:"Guardian of the sigils and midnight dances.",image:"assets/images/phillians/phillipa.png",social:"@phillipa"},
  {name:"Phimmy",title:"Lore Archivist",bio:"Writes confessions and collects cursed playlists.",image:"assets/images/phillians/phimmy.png",social:"@phimmy"},
  {name:"Philtevis",title:"Channel Overlord",bio:"Runs YouTube chaos operations.",image:"assets/images/phillians/philtevis.png",social:"@philtevis"}
];
const grid = document.getElementById('phillian-grid');
if(grid){
  phillians.forEach(p=>{
    const card = document.createElement('div');
    card.className='phillian-card';
    card.innerHTML=`<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><h4>${p.title}</h4><p>${p.bio}</p><p>${p.social}</p>`;
    grid.appendChild(card);
  });
}

// ----- Dynamic Enemies (example) -----
const enemies = [
  {name:"Rival Cult X",threat:"High",desc:"They seek to replace Phil."},
  {name:"Corporate Y",threat:"Medium",desc:"They steal soda rituals."}
];
const enemyGrid = document.getElementById('enemy-grid');
if(enemyGrid){
  enemies.forEach(e=>{
    const card = document.createElement('div');
    card.className='enemy-card';
    card.innerHTML=`<h3>${e.name}</h3><p>${e.desc}</p><span>Threat: ${e.threat}</span>`;
    enemyGrid.appendChild(card);
  });
}

