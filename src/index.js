/* HEADER */

let yPos = window.scrollY
const header = document.getElementById('header');

function headerHide(){
    if (yPos < window.scrollY){
        header.style.top = "-10vh";
    } else if (yPos > window.scrollY){
        header.style.top = "0";
    }
    yPos = window.scrollY
}

/* COUNTDOWN */

let countDownDate = new Date("December 18, 2023 15:00:00").getTime();

function timer() {

    // Find the distance between now and the count down date
    let now = new Date().getTime();
    let distance = countDownDate - now; 

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    if (distance < 0) {
        clearInterval(x);
    }
}

timer()

let x = setInterval(function () {

    timer()

}, 1000);

/* NAVBAR COLORING */

function highlightCurrentNav() {

    // Get the position of the sections
    let homeSection = document.getElementById('home')
    let aboutSection = document.getElementById('about')
    let scheduleSection = document.getElementById('schedule')
    let rulesSection = document.getElementById('rules')

    // Select the navigation links
    let homeNav = document.getElementById('nav-home');
    let aboutNav = document.getElementById('nav-about');
    let scheduleNav = document.getElementById('nav-schedule')
    let rulesNav = document.getElementById('nav-rules')

    // Reset styles for all navigation links
    homeNav.style.color = '';
    aboutNav.style.color = '';
    scheduleNav.style.color = '';
    rulesNav.style.color = '';

    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Get the position of each section
    const homePos = homeSection.offsetTop;
    const aboutPos = aboutSection.offsetTop;
    const schedulePos = scheduleSection.offsetTop;
    const rulesPos = rulesSection.offsetTop;

    // Logic to highlight the current section's nav link
    if (scrollPosition >= homePos && scrollPosition < aboutPos) {
        homeNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= aboutPos && scrollPosition < schedulePos) {
        aboutNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= schedulePos && scrollPosition < rulesPos) {
        scheduleNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= rulesPos){
        rulesNav.style.color = 'hsl(140, 60%, 40%)';
    }
};

window.onload = highlightCurrentNav();