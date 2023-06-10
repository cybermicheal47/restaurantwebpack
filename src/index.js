// DEMO JOKE APP
import { renderhome } from './home.js';
import { rendermenu } from './menu.js';
import { rendercontact } from './contact.js';
import './styles/main.scss'
import laughing from './assets/laughing.svg'



// Get the tab elements
const homeTab = document.getElementById('homeTab');
const menuTab = document.getElementById('menuTab');
const contactTab = document.getElementById('contactTab');

// Add event listeners to the tab elements
homeTab.addEventListener('click', () => openTab('home'));
menuTab.addEventListener('click', () => openTab('menu'));
contactTab.addEventListener('click', () => openTab('contact'));

// Render the home page initially
renderhome();

// Function to handle tab clicks
function openTab(tabName) {
  switch (tabName) {
    case 'home':
      renderhome();
      break;
    case 'menu':
      rendermenu();
      break;
    case 'contact':
      rendercontact();
      break;
    default:
      renderhome();
      break;
  }
}
