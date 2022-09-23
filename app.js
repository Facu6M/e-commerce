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

// abrir y cerrar CART carrito

let carrito = false;
let priceModal = document.querySelector(".cart-modal__price")

cart.addEventListener("click", function() {
if (carrito == false ) {
        document.querySelector(".cart-modal").style.display = "block";
        carrito = true;
        priceModal.innerHTML = `$125 x ${lastValue} <span>$${lastValue*125}.00</span>`
 }   else {
            document.querySelector(".cart-modal").style.display = "none"
            carrito = false;
        }
})


// abrir Gallery DESKTOP

gallery.addEventListener("click", function() {
    document.querySelector(".modal-gallery__backgroundd").style.display = "block";
    body.style.backgroundColor = "hsl(0deg, 0%, 0%, 0.5)"
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


// // seleccionar otra foto en Desktop

const foto5 = document.getElementById("1")
const foto6 = document.getElementById("2")
const foto7 = document.getElementById("3")
const foto8 = document.getElementById("4")

foto5.addEventListener("click", function() {
    const imagen5 = document.querySelector(".gallery__image-container")
    imagen5.style.backgroundImage = " url(./images/image-product-1.jpg)";
})

foto6.addEventListener("click", function() {
    const imagen6 = document.querySelector(".gallery__image-container")
    imagen6.style.backgroundImage = " url(./images/image-product-2.jpg)";
})

foto7.addEventListener("click", function() {
    const imagen7 = document.querySelector(".gallery__image-container")
    imagen7.style.backgroundImage = " url(./images/image-product-3.jpg)";
})

foto8.addEventListener("click", function() {
    const imagen8 = document.querySelector(".gallery__image-container")
    imagen8.style.backgroundImage = " url(./images/image-product-4.jpg)";
})


// Aumentar el input o Decrementar el input

const inputMenos = document.querySelector(".input_minus")
const inputPlus = document.querySelector(".input_plus")
let input = document.querySelector(".input__number")

let userInputNumber = 0;

inputPlus.addEventListener("click", function(){
    userInputNumber++;
    input.value = userInputNumber
})

inputMenos.addEventListener("click", function(){
    userInputNumber--;
    if (userInputNumber <= 0 ){
        userInputNumber = 0;
    }
    input.value = userInputNumber
})

//agregar el valor del input al carrito de arriba

const boton = document.querySelector(".details__button")
let valor = document.querySelector(".header__cart--notification")
let lastValue = parseInt(valor.innerText)


boton.addEventListener("click", function() {

lastValue = lastValue + userInputNumber;

valor.innerText = lastValue;
valor.style.display = "block"
priceModal.innerHTML = `$125 x ${lastValue} <span>$${lastValue*125}.00</span>`
})

// icono borrar

let deleteCart = document.querySelector(".cart-modal__delete")
let details = document.querySelector(".cart-modal__checkout-container")

deleteCart.addEventListener("click", function (){
details.innerHTML = '<p class="cart_empty"> Your cart is empty </p> '
})

