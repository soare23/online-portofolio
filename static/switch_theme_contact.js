// Select the elemnts that will change on click

let switchThemeBody = document.getElementById('switch-theme');
let switchThemeBtn = document.getElementById('switchButton');
let body = document.getElementById('body');
let navBar = document.getElementById('navbar');
let greeting = document.getElementById('greeting');
let jumbotron = document.getElementById('jumbotron');
let submitBtn = document.getElementById('submit_button');
let footer = document.getElementById('footer');

// Call the function when page loads
window.onload = checkCurrentTheme();

// Function that checks what is the general theme and changes it to it
function checkCurrentTheme() {
  if (localStorage.getItem('theme') == 'white') {
    body.style.backgroundColor = '#fcfff7';
    navBar.className = 'navbar navbar-expand-lg navbar-dark bg-info';
    greeting.style.color = '#5bc0de !important';
    jumbotron.style.border = 'none';
    jumbotron.style.backgroundColor = '#fcfff7';
    submitBtn.className = 'btn btn-info';
    footer.className = 'navbar navbar-dark bg-info footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'white');
  } else {
    body.style.backgroundColor = '#272b30';
    navBar.className = 'navbar navbar-expand-lg navbar-light bg-light';
    greeting.style.color = '#7a8288';
    // jumbotron.style.border = 'none';
    jumbotron.style.backgroundColor = '#1c1e22';
    submitBtn.className = 'btn btn-primary';
    footer.className = 'navbar navbar-light bg-light footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
    console.log('DARK');
  }
}

// Have the posibility to change back to dark

switchThemeBtn.addEventListener('click', changeTheme);

// Function that changes the theme

function changeTheme() {
  if (localStorage.getItem('theme') == 'white') {
    body.style.backgroundColor = '#272b30';
    navBar.className = 'navbar navbar-expand-lg navbar-light bg-light';
    greeting.style.color = '#7a8288';
    jumbotron.style.border = 'none';
    jumbotron.style.backgroundColor = '#1c1e22';
    submitBtn.className = 'btn btn-primary';
    footer.className = 'navbar navbar-light bg-light footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
    console.log('DARK');
  } else {
    body.style.backgroundColor = '#fcfff7';
    navBar.className = 'navbar navbar-expand-lg navbar-dark bg-info';
    greeting.style.color = '#5bc0de !important';
    jumbotron.style.border = 'none';
    jumbotron.style.backgroundColor = '#fcfff7';
    submitBtn.className = 'btn btn-info';
    footer.className = 'navbar navbar-dark bg-info footer';
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'white');
    console.log('WHITE');
  }
}
