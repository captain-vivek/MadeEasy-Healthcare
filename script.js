
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


//to go on prescription page
function goToPage(page) {
  window.location.href = page;
}
