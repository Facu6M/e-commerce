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

// seleccionar otra foto en Gallery DESKTOP

const foto1 = document.getElementById("m1")
const foto2 = document.getElementById("m2")
const foto3 = document.getElementById("m3")
const foto4 = document.getElementById("m4")

foto1.addEventListener("click", function() {
    const imagen1 = document.querySelector(".modal-gallery__image-container")
    imagen1.style.backgroundImage = " url(./images/image-product-1.jpg)";
})

foto2.addEventListener("click", function() {
    const imagen2 = document.querySelector(".modal-gallery__image-container")
    imagen2.style.backgroundImage = " url(./images/image-product-2.jpg)";
})

foto3.addEventListener("click", function() {
    const imagen3 = document.querySelector(".modal-gallery__image-container")
    imagen3.style.backgroundImage = " url(./images/image-product-3.jpg)";
})

foto4.addEventListener("click", function() {
    const imagen4 = document.querySelector(".modal-gallery__image-container")
    imagen4.style.backgroundImage = " url(./images/image-product-4.jpg)";
})

// cerray Gallery DESKTOP

cruz.addEventListener("click", function() {
    document.querySelector(".modal-gallery__backgroundd").style.display = "none";
})


