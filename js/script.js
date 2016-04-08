var iconBurger = document.querySelector(".nav-menu__toggle-menu-icon--burger");
var navMenu = document.querySelector(".nav-menu__container");
var iconClose = document.querySelector(".nav-menu__toggle-menu-icon--close");



iconBurger.addEventListener("click", function(event){
  event.preventDefault();
  navMenu.classList.remove("nav-menu__container--hidden");
});


iconClose.addEventListener("click", function(event){
  event.preventDefault();
  navMenu.classList.add("nav-menu__container--hidden");
});
