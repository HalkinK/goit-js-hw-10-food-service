import './sass/main.scss';
import galleryTpl from './templates/gallery.hbs';
import gallery from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const galleryMenu = document.querySelector('.js-menu');
const galleryMarkup = createGalleryMarkup(gallery);
const menuCheckbox = document.querySelector('#theme-switch-toggle');
const savedThemeLight = localStorage.getItem('Theme');

const bodyRef = document.querySelector('body');

bodyRef.classList.add('light-theme');

changeLight(savedThemeLight);


galleryMenu.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery.map(galleryTpl).join('');
}

menuCheckbox.addEventListener('change', onCheckboxChenge);

function changeLight(savedThemeLight) {
    if (savedThemeLight === 'dark-theme') {
        menuCheckbox.checked = true;
        bodyRef.classList.add('dark-theme');
    }
}

function onCheckboxChenge(e) {
    if (e.currentTarget.checked) {
        bodyRef.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('Theme', 'dark-theme');
    } else {
        bodyRef.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('Theme', 'light-theme');
    }
}



