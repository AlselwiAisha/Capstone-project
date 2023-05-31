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


/*---------Sectors-----------*/
const sectors = [
    
    {
      id:1,
      title: 'Economic Empowermen',
      image: './Images/pci.png',
      description: ` Increased youth opportunities to access 
      the market.`,
    },
    {
      id:2,
      title: 'Humanitarian Response',
      image: './Images/humanity.png',
      description: `Hopeful society members who are able to 
      continue functioning.`,
    },
    {
      id:3,
      title: 'Civil Society Organizations',
      image: './Images/people2.png',
      description: `CSOs are able to influence youth policies at the local
      and national.`,
    },
    {
      id:4,
      title: 'Team members',
      image: './Images/people.png',
      description: `Resilient society members who are able to 
      continue functioning.`,
    },
    {
      id:5,
      title: 'Youth Leadership',
      image: './Images/leadership.png',
      description: `Increased youth opportunities to access 
      the market.`,
    }
]
function createSectorCard() {
    sectors.forEach((sector) => {
      const sectorCard = `
      <div class="sector-card column-gap-4 p-1 d-flex align-items-center flex-md-column  row-gap-md-2 p-md-4 ">
      <img src="${sector.image}" alt="icon${sector.id}" >
      <h5 class="sector-title text-main m-0">${sector.title}</h5>
      <p class="sector-desc m-0">${sector.description}
      </p>
  </div>
  `;
      const element = document.querySelector('.sectors');
      element.innerHTML += sectorCard;
    });
  }
  createSectorCard();