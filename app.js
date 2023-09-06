const menu = document.querySelector(".header__menu");
const x = document.querySelector(".modal-navbar_close");


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
    gallery.style.backgroundImage = `url('../images/image-product-${imgIndex+1}.jpg')`;
})

previusButton.addEventListener("click", function() {
    if (imgIndex == 0){
        imgIndex = 3;
    }else{
        imgIndex--;
    }
    gallery.style.backgroundImage = `url('../images/image-product-${imgIndex+1}.jpg')`;
})


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


// abrir Gallery DESKTOP
/*
gallery.addEventListener("click", function() {
    document.querySelector(".modal-gallery__backgroundd").style.display = "block";
    body.style.backgroundColor = "hsl(0deg, 0%, 0%, 0.5)"
})
*/

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


// Agregar numeros al input
let inputMinus = document.querySelector('.input_minus');
let inputPlus = document.querySelector('.input_plus');
let inputNumber = document.querySelector('.input__number');
let productCounter = 0;

inputMinus.addEventListener('click', ()=>{
    productCounter--;
    inputNumber.value = productCounter;
});

inputPlus.addEventListener('click', ()=>{
    productCounter++;
    inputNumber.value = productCounter;
});


//Agregar Elementos al carrito
let headerCartNotification = document.querySelector('.header__cart--notification');
let addToCartBtn = document.querySelector('.details__button');

let productCartNumber = 0;
addToCartBtn.addEventListener('click', ()=>{
    productCartNumber = productCartNumber + parseInt(inputNumber.value)
    headerCartNotification.innerText = productCartNumber;



    if(headerCartNotification.innerText == 0){
        headerCartNotification.style.display = 'none'
    }else{
        headerCartNotification.style.display = 'block'
        let cartModalCheckoutContainer = document.querySelector('.cart-modal__checkout-container')



        cartModalCheckoutContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="./images/image-product-1.jpg" alt="">
            <div>
            <p class="cart-modal__product">Autum Limited Edition...</p>
            <p class="cart-modal__price">$125 x 3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="">
        </div>
        <button class="cart-modal__checkout-btn">Checkout</button>`
        let priceMultipication = document.querySelector('.cart-modal__price');
        priceMultipication.innerHTML = `$125 x ${productCartNumber} <span>$${productCartNumber*125}</span>`
        deleteCartItems()
    }

});

let cartModalCheckoutContainer = document.querySelector('.cart-modal__checkout-container')
let cartModalDeleteBtn = document.querySelector('.cart-modal__delete');

// Borrar elemento del cart
function deleteCartItems(){
    cartModalDeleteBtn = document.querySelector('.cart-modal__delete');
    // let cartModalCheckoutBtn = document.querySelector('.cart-modal__checkout-btn');
    // let cartModalCheckoutContainer = document.querySelector('.cart-modal__checkout-container')
    cartModalDeleteBtn.addEventListener('click', event=>{
        console.log('borrado')
        cartModalCheckoutContainer.innerHTML = `<p class="cart-modal__empty">Your cart is empty.</p>`
        // headerCartNotification.innerText = 0;
        headerCartNotification.style.display = 'none'
        productCartNumber = 0;
    });
}

// Mostrar / Ocular modal cart
let cartBtn = document.querySelector('.header__cart');
headerCartNotification.innerText = 0;
let cartModal = document.querySelector('.cart-modal');


cartBtn.addEventListener('click', ()=>{
    console.log(cartModal)
    // cartModal.classList.toggle('show')
    if(cartModal.style.display == 'block'){
        cartModal.style.display = 'none'
    }else{
        console.log(headerCartNotification.innerText)
        if(headerCartNotification.innerText == 0){
            cartModalCheckoutContainer.innerHTML = `<p class="cart-modal__empty">Your cart is empty.</p>`
        }
        cartModal.style.display = 'block'
        console.log(headerCartNotification.innerText)
        if(headerCartNotification.innerText !== '0'){
            deleteCartItems()
        }
    }
});


//Cerrar el modal del cart cuando se hace click fuera de el
function waitClose(){
    document.addEventListener('click', event=>{
        if(event.target.className != 'cart-modal'){
            cartModal.style.display = 'none';
        }
    });
}
