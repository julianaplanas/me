// Main menu buttons
const about = document.querySelector('.about-nav');
const projects = document.querySelector('.projects-nav');
const events = document.querySelector('.events-nav');
const publications = document.querySelector('.publications-nav');
const contact = document.querySelector('.contact-nav');

// Main sections
const navbar = document.getElementById('navbar-box')
const mainMenuBox = document.getElementById('main-menu-box');
const aboutBox = document.getElementById('about-box');
const eventsBox = document.getElementById('events-box');
const publicationsBox = document.getElementById('publications-box');
const contactBox = document.getElementById('contact-box');
const projectsBox = document.getElementById('projects-box');

about.addEventListener('click', ()=>{
    navbarDisplay()
    // mainMenuBox.style.display = 'none';
    aboutBox.style.display = 'block';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

projects.addEventListener('click', () =>{
    navbarDisplay()
    // mainMenuBox.style.display = 'none';
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'block';
})

events.addEventListener('click', () =>{
    navbarDisplay()
    // mainMenuBox.style.display = 'none';
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'block';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

publications.addEventListener('click', () =>{
    navbarDisplay()
    // mainMenuBox.style.display = 'none';
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'block';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

contact.addEventListener('click', () =>{
    navbarDisplay()
    // mainMenuBox.style.display = 'none';
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'block';
    projectsBox.style.display = 'none';
})

// Navbar for secondary pages

const menuBox = document.getElementById('menu-box');
const contactFooter = document.getElementById('contactFooter')

const navbarDisplay = () =>{
    menuBox.classList.remove('column')
    menuBox.classList.remove('is-12');
    menuBox.classList.add('navbar');
    navbar.classList.add('navbar-menu')
    navbar.classList.add('navbar-start')
    about.classList.add('navbar-item');
    projects.classList.add('navbar-item');
    events.classList.add('navbar-item');
    publications.classList.add('navbar-item');
    contact.classList.add('navbar-item');
    about.style.fontSize = '1rem';
    projects.style.fontSize = '1rem';
    events.style.fontSize = '1rem';
    publications.style.fontSize = '1rem';
    contact.style.fontSize = '1rem';
    contactFooter.style.display = 'none';
}