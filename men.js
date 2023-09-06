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
