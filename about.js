
const gallery = document.querySelector(".gallery__image-container");
const previusButton = document.querySelector(".gallery__previous")
const nextButton = document.querySelector(".gallery__next")
let imgIndex = 0;

nextButton.addEventListener("click", function() {
    if (imgIndex == 3){
        imgIndex = 0;
    }else{
        imgIndex++;
    }
    gallery.style.backgroundImage = `url('./shoes_${imgIndex+1}.png')`;
})

previusButton.addEventListener("click", function() {
    if (imgIndex == 0){
        imgIndex = 3;
    }else{
        imgIndex--;
    }
    gallery.style.backgroundImage = `url('./shoes_${imgIndex+1}.png')`;
})


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
const foto7 = document.getElementById("foto")
const foto8 = document.getElementById("4")

foto5.addEventListener("click", function() {
    const imagen5 = document.querySelector(".gallery__image-container")
    imagen5.style.backgroundImage = " url(./shoes_1.png)";
})

foto6.addEventListener("click", function() {
    const imagen6 = document.querySelector(".gallery__image-container")
    imagen6.style.backgroundImage = " url(./shoes_2.png)";
})

foto7.addEventListener("click", function() {
    const imagen7 = document.querySelector(".gallery__image-container")
    imagen7.style.backgroundImage = " url(./shoes_3.png)";
})

foto8.addEventListener("click", function() {
    const imagen8 = document.querySelector(".gallery__image-container")
    imagen8.style.backgroundImage = " url(./shoes_4.png)";
});

