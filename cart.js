// cart functionalities

const cart = document.querySelector('.cart');
const cartMenu = document.querySelector('.cart-menu');
const closeCart = document.querySelector('.close-cart');

const cartForm = document.querySelector('.cart-form');
const quantityInput = document.getElementById('quantity');
const cartQuantity = document.querySelector('.cart-quantity');

cart.addEventListener('click', handleCartDisplay);
closeCart.addEventListener('click', handleCartDisplay);

function handleCartDisplay() {
   cartMenu.classList.toggle('hide'); 
}

let cartNumber;

cartForm.addEventListener('submit', (e) => {
   e.preventDefault();

   let quantityValue = quantityInput.value;

   localStorage.setItem('quantity', quantityValue);
   
   cartNumber = localStorage.getItem('quantity'); 
   
   cartNumberIcon(cartNumber);
   handleCartMenu(cartNumber);
})

function cartNumberIcon(quantity) {
    if (!quantity || quantity == 0) {
        cartQuantity.classList.add('hide'); 
     } else {
      cartQuantity.classList.remove('hide');
      cartQuantity.innerHTML = cartNumber;
     }
}

const emptyCart = document.querySelector('.empty-cart');
const fullCart = document.querySelector('.full-cart');
const itemQuantity = document.querySelector('.item-quantity');
const total = document.querySelector('.cart-total');

let price = 10.99;

function handleCartMenu(quantity) {
    if (quantity == 0) {
        emptyCart.classList.remove('hide');
        fullCart.classList.add('hide');
    } else {
        emptyCart.classList.add('hide');
        fullCart.classList.remove('hide');
        itemQuantity.innerHTML = 'x ' + quantity;
        total.innerHTML = 'Total: $' + (quantity * price);
    } 
}


function updateCart() {
    cartNumber = localStorage.getItem('quantity') || 0;
    cartNumberIcon(cartNumber);
    handleCartMenu(cartNumber);
}

document.addEventListener('DOMContentLoaded', updateCart);