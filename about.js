

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
// // seleccionar otra foto en Desktop


const foto5 = document.getElementById("1")
const foto6 = document.getElementById("2")
const foto7 = document.getElementById("3")
const foto8 = document.getElementById("4")

foto5.addEventListener("click", function() {
    const imagen5 = document.querySelector(".gallery__image-container")
    imagen5.style.backgroundImage = " url(./shoes_1.jfif)";
})

foto6.addEventListener("click", function() {
    const imagen6 = document.querySelector(".gallery__image-container")
    imagen6.style.backgroundImage = " url(./shoes_2.webp)";
})

foto7.addEventListener("click", function() {
    const imagen7 = document.querySelector(".gallery__image-container")
    imagen7.style.backgroundImage = " url(./shoes_3.webp)";
})

foto8.addEventListener("click", function() {
    const imagen8 = document.querySelector(".gallery__image-container")
    imagen8.style.backgroundImage = " url(./shoes_4.png)";
});

