const toggleBtn = document.getElementById("checkbox");
const themeText = document.querySelector('.theme-text');
const headingOverview = document.querySelector('.heading-overview');

toggleBtn.addEventListener('click', check);

function check() {
 if(toggleBtn.checked == true) {
    darkTheme();
}  else {
    lightTheme();
}
}

function darkTheme() {
    document.documentElement.style.setProperty('--contrasting-color', '#fff');
    document.documentElement.style.setProperty('--top-background-color', '#20222f');
    document.documentElement.style.setProperty('--main-color', '#1d2029');
    document.documentElement.style.setProperty('--slider-color', '#fff');
    document.documentElement.style.setProperty('--slider-checked-color', 'linear-gradient(hsl(210, 78%, 56%),hsl(146, 68%, 55%))');
    document.documentElement.style.setProperty('--box-card-color', '#252b43');
    document.documentElement.style.setProperty('--facebook-color', '#1b7cd5');
    document.documentElement.style.setProperty('--twitter-color', '#1d81c1');
    document.documentElement.style.setProperty('--instagram-color', '#af427a');
    document.documentElement.style.setProperty('--youtube-color', '#a70a2d');
    headingOverview.style.setProperty('color', 'var(--contrasting-color)');
    themeText.innerText = 'Light Mode';
}

function lightTheme() {
    document.documentElement.style.setProperty('--contrasting-color', '#000');
    document.documentElement.style.setProperty('--top-background-color', '#f8f9fe');
    document.documentElement.style.setProperty('--main-color', '#fff');
    document.documentElement.style.setProperty('--slider-color', '#ccc');
    document.documentElement.style.setProperty('--slider-checked-color', '#aeb2cb;');
    document.documentElement.style.setProperty('--box-card-color', '#f0f3fa');
    document.documentElement.style.setProperty('--facebook-color', '#52abf3');
    document.documentElement.style.setProperty('--twitter-color', '#42aff4');
    document.documentElement.style.setProperty('--instagram-color', '#E35FA3');
    document.documentElement.style.setProperty('--youtube-color', '#C4032A');
    headingOverview.style.setProperty('color', '#7c7e89');
    themeText.innerText = 'Dark Mode';
}
