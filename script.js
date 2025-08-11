
function toggleMenu(){
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  if (hamburger) hamburger.classList.toggle('active');
  if (menu) menu.classList.toggle('active');
}
