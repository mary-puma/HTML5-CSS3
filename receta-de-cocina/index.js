const navToogle = document.querySelector(".nav-toogle");
const navMenu = document.querySelector(".container-menu");

navToogle.addEventListener("click", () => {
    navMenu.classList.toogle("container-menu_visible")
});