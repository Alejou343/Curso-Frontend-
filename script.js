const navEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const logoMenu = document.querySelector('.logo-menu');
const shoppingCart = document.querySelector('.product-detail');
const logoCart = document.querySelector('.navbar-shopping-cart');
const arrowBack = document.querySelector('.backArrow')

navEmail.addEventListener('click', toggleMenuDesktop);
logoMenu.addEventListener('click', toggleMenuMobile);
logoCart.addEventListener('click', toggleShoppingCart);
arrowBack.addEventListener('click', closeShoppingCart)



function closeShoppingCart () {
    shoppingCart.classList.add('inactive')
}

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
}

function toggleShoppingCart(){
    shoppingCart.classList.toggle('inactive')
    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
}

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
}
