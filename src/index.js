var prevScrollpos = window.pageYOffset;
const header = document.getElementById('header');
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-4.75rem";
  }
  prevScrollpos = currentScrollPos;
}