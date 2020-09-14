// Get all the elements that will change on click

let switchThemeBody = document.getElementById('switch-theme');
let switchThemeBtn = document.getElementById('switchButton');
let body = document.getElementById('body');
let navBar = document.getElementById('navbar');
let greeting = document.getElementById('greeting');
let jumbotron = document.getElementById('jumbotron');
let aboutMe = document.getElementById('about_me');
let cardHeaders = document.querySelectorAll('#card-header');
let cardsText = document.querySelectorAll('#card-text');
let cards = document.querySelectorAll('#card');
let listItems = document.querySelectorAll('#list-group-item');
let footer = document.getElementById('footer');

// Set up the event listener
switchThemeBtn.addEventListener('click', changeTheme);
// Check main theme when page loads
window.onload = checkCurrentTheme();

// Set up local storage

// localStorage.setItem('theme', 'dark');

// Function that will change the theme
function changeTheme() {
  if (localStorage.getItem('theme') == 'dark') {
    body.style.backgroundColor = '#fcfff7';
    navBar.className = 'navbar navbar-expand-lg navbar-dark bg-info';
    greeting.style.color = '#5bc0de';
    jumbotron.style.border = 'none';
    jumbotron.style.backgroundColor = '#fcfff7';
    console.log(greeting.nextElementSibling);
    aboutMe.className = 'about card text-white bg-info mb-3 mr-3';
    cardHeaders.forEach((cardHeader) => {
      cardHeader.style.backgroundColor = '#5bc0de';
    });
    cardsText.forEach((cardText) => {
      cardText.style.color = '#3a3f44';
    });
    cards.forEach((card) => {
      card.className = 'card text-white bg-light mb-3 ml-3 mr-3';
    });
    listItems.forEach((listItem) => {
      listItem.style.backgroundColor = '#5bc0de';
    });
    footer.className = 'navbar navbar-dark bg-info footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'white');
  } else {
    body.style.backgroundColor = '#272b30';
    navBar.className = 'navbar navbar-expand-lg navbar-light bg-light';
    greeting.style.color = '#7a8288';
    jumbotron.style.backgroundColor = '#1c1e22';
    aboutMe.className = 'about card text-muted bg-dark mb-3';
    cardHeaders.forEach((cardHeader) => {
      cardHeader.style.backgroundColor = '#515960';
    });
    cardsText.forEach((cardText) => {
      cardText.style.color = '#aaa';
    });
    cards.forEach((card) => {
      card.className = 'card mb-3 ml-3 mr-3';
    });
    listItems.forEach((listItem) => {
      listItem.style.backgroundColor = '#32383e';
    });
    footer.className = 'navbar navbar-light bg-light footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
  }
}

// Function that checks the main theme and changes it to it if needed

function checkCurrentTheme() {
  if (localStorage.getItem('theme') == 'white') {
    body.style.backgroundColor = '#fcfff7';
    navBar.className = 'navbar navbar-expand-lg navbar-dark bg-info';
    greeting.style.color = '#5bc0de';
    jumbotron.style.border = 'none';
    jumbotron.style.backgroundColor = '#fcfff7';
    console.log(greeting.nextElementSibling);
    aboutMe.className = 'about card text-white bg-info mb-3';
    cardHeaders.forEach((cardHeader) => {
      cardHeader.style.backgroundColor = '#5bc0de';
    });
    cardsText.forEach((cardText) => {
      cardText.style.color = '#3a3f44';
    });
    cards.forEach((card) => {
      card.className = 'card text-white bg-light mb-3 ml-3 mr-3';
    });
    listItems.forEach((listItem) => {
      listItem.style.backgroundColor = '#5bc0de';
    });
    footer.className = 'navbar navbar-dark bg-info footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'white');
  } else {
    body.style.backgroundColor = '#272b30';
    navBar.className = 'navbar navbar-expand-lg navbar-light bg-light';
    greeting.style.color = '#7a8288';
    jumbotron.style.backgroundColor = '#1c1e22';
    aboutMe.className = 'about card text-muted bg-dark mb-3';
    cardHeaders.forEach((cardHeader) => {
      cardHeader.style.backgroundColor = '#515960';
    });
    cardsText.forEach((cardText) => {
      cardText.style.color = '#aaa';
    });
    cards.forEach((card) => {
      card.className = 'card mb-3 ml-3 mr-3';
    });
    listItems.forEach((listItem) => {
      listItem.style.backgroundColor = '#32383e';
    });
    footer.className = 'navbar navbar-light bg-light footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
  }
}
