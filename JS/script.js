/*------------mobile menu---------------*/
const hamburger = document.querySelector('.navbar-toggler-icon');
const close = document.querySelector('.closebtn');
const navbar = document.querySelector('#navbarSupportedContent');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  document.querySelector('.cc-campaign').style.display = 'none';
  navbar.classList.add('mobil-menu');
  navbar.classList.remove('d-none');
  navbar.classList.add('w-100');
  body.classList.toggle('active');
});

close.addEventListener('click', () => {
  document.querySelector('.cc-campaign').style.display = 'block';
  navbar.classList.remove('mobil-menu');
  navbar.classList.add('d-none');
  navbar.classList.remove('w-100');
  body.classList.toggle('active');
});