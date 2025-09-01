const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', ()=>{
  const open = links.style.display === 'block';
  links.style.display = open ? 'none' : 'block';
});
