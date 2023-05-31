/* ------------mobile menu---------------*/
const hamburger = document.querySelector('.navbar-toggler-icon');
const close = document.querySelector('.closebtn');
const navbar = document.querySelector('#navbarSupportedContent');
const body = document.querySelector('body');

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

/* ---------Sectors-----------*/
const sectors = [

  {
    id: 1,
    title: 'Economic Empowermen',
    image: './Images/pci.png',
    description: ` Increased youth opportunities to access 
      the market.`,
  },
  {
    id: 2,
    title: 'Humanitarian Response',
    image: './Images/humanity.png',
    description: `Hopeful society members who are able to 
      continue functioning.`,
  },
  {
    id: 3,
    title: 'Civil Society Organizations',
    image: './Images/people2.png',
    description: `CSOs are able to influence youth policies at the local
      and national.`,
  },
  {
    id: 4,
    title: 'Team members',
    image: './Images/people.png',
    description: `Resilient society members who are able to 
      continue functioning.`,
  },
  {
    id: 5,
    title: 'Youth Leadership',
    image: './Images/leadership.png',
    description: `Increased youth opportunities to access 
      the market.`,
  },
];
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

/* --------------Member--------------------*/
const members = [
  {
    id: 1,
    img: './Images/1.jpg',
    name: 'Safa Rawiah',
    title: 'General Manager',
    desc: 'Safa Rawiah oversees the daily operations of a business segment, department, or stand-alone retail location.',
  },
  {
    id: 2,
    img: './Images/2.jpg',
    name: 'Ali Alwazeer',
    title: 'Program Coordinator',
    desc: 'Ali Alwazeer plans, implements, and evaluates different programs.',
  },
  {
    id: 3,
    img: './Images/5.jpg',
    name: 'Dr.Sawsan Al Refai',
    title: 'Board Member',
    desc: 'Dr.Sawsan Al Refaioversee directs business operations, sets policies, and approves business decisions.',
  },
  {
    id: 4,
    img: './Images/4.jpg',
    name: 'Waleed Mohammed Al-Sabri',
    title: 'Coordinator of Monitoring and Evaluation',
    desc: 'Waleed Al-Sabri Monitors and evaluats activities.',
  },
  {
    id: 5,
    img: './Images/3.jpg',
    name: 'Amal Al-Kabsi',
    title: 'Director, Monitoring and Evaluation unit',
    desc: 'Amal Al-Kabsi provide advice to the Resident and Humanitarian Coordinator',
  },
  {
    id: 6,
    img: './Images/6.jpg',
    name: 'Suhaib Jaber',
    title: 'Communications Assistant',
    desc: "Suhaib Jaber helps the Communications Director on the company's internal and public websites and social media",
  },

];
function createMembers() {
  const element = document.querySelector('.membersContainer');
  members.forEach((member) => {
    const mm = `
      <div class="member  d-flex col-md-6 d-md-flex" id="member${member.id}">
                        <div class="d-flex flex-column me-4">
                            <img src="./Images/istockphoto.jpg" alt="background"
                                class="backgtound-img">
                            <img src="${member.img}" alt="image${member.id}" class="memberImg">
                        </div>
                        <div class="content ms-2">
                            <h2 class="name"> ${member.name}</h2>
                            <p class="title text-main py-1 small">${member.title}</p>
                            <div class="line2 my-1"></div>
                            <p class="desc py-1">${member.desc}
                            </p>
                        </div>
                    </div>
        `;
    element.innerHTML += mm;
  });
  for (let i = 1; i <= members.length; i += 1) {
    const member1 = document.querySelector(`#member${i}`);
    if (i > 2) {
      member1.classList.add('d-none');
    }
  }
}
createMembers();
const moreBtn = document.querySelector('.btn-more');
moreBtn.addEventListener('click', () => {
  for (let i = 1; i <= members.length; i += 1) {
    const member = document.querySelector(`#member${i}`);
    if (i > 2) {
      member.classList.remove('d-none');
    }
  }
});
