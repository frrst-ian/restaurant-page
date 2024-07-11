import './styles.css';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

function openTab(tabName) {
    // Clear the content
    content.innerHTML = '';

    // Remove 'active' class from all buttons
    [homeBtn, menuBtn, contactBtn].forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    document.getElementById(tabName).classList.add('active');

    // Load the appropriate page content
    switch(tabName) {
        case 'home':
            homePage();
            break;
        case 'menu':
            menuPage();
            break;
        case 'about':
            contactPage();
            break;
    }
}

// Add event listeners
homeBtn.addEventListener('click', () => openTab('home'));
menuBtn.addEventListener('click', () => openTab('menu'));
aboutBtn.addEventListener('click', () => openTab('contact'));

// Initialize with home page
document.addEventListener('DOMContentLoaded', () => openTab('home'));