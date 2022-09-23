const menu = document.querySelector(".header__menu");
const x = document.querySelector(".modal-navbar_close");
const gallery = document.querySelector(".gallery__image-container");
const cruz = document.querySelector(".modal-gallery__close");

const cart = document.getElementById("car");

// mostrar menu MOBILE PHONE

menu.addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
})

// cerrar menu MOBILE PHONE

x.addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
})

// abrir CART carrito

cart.addEventListener("click", function() {
        document.querySelector(".cart-modal").style.display = "block"
})



// abrir Gallery DESKTOP

gallery.addEventListener("click", function() {
    document.querySelector(".modal-gallery__backgroundd").style.display = "block";
})

// cerray Gallery DESKTOP

cruz.addEventListener("click", function() {
    document.querySelector(".modal-gallery__backgroundd").style.display = "none";
})


