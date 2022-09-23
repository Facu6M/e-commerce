
const menu = document.querySelector(".header__menu");
const x = document.querySelector(".modal-navbar_close");

// mostrar menu MOBILE PHONE

menu.addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
})

// cerrar menu MOBILE PHONE

x.addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
})
