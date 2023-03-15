const navEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const logoMenu = document.querySelector('.logo-menu');
const shoppingCart = document.querySelector('.product-detail');
const logoCart = document.querySelector('.navbar-shopping-cart');
const arrowBack = document.querySelector('.backArrow');
const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleMenuDesktop);
logoMenu.addEventListener('click', toggleMenuMobile);
logoCart.addEventListener('click', toggleShoppingCart);
arrowBack.addEventListener('click', closeShoppingCart);



function closeShoppingCart () {
    shoppingCart.classList.add('inactive')
}

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
    asideProductDetail.classList.add('inactive')

}

function toggleShoppingCart(){
    shoppingCart.classList.toggle('inactive')
    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
    asideProductDetail.classList.add('inactive')
}

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
    asideProductDetail.classList.add('inactive')
}

const productList = [];

for (let i=0; i<50; i++) {

    productList.push({
        name: 'Bike',
        price: 200,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    
    productList.push({
        name: 'PC',
        price: 700,
        image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    
    productList.push({
        name: 'Consola',
        price: 520,
        image: 'https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    
}

function renderProducts(arr) {
for (let product of arr) {
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', toggleAsideProductDetail)

    const productInfo = document.createElement('div');
    productInfo.setAttribute('class', 'product-info');

    const productInfoDiv = document.createElement('div');
    
    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = `$${product.price}`;

    const productInfoName = document.createElement('p');
    productInfoName.innerText = `${product.name}`;

    
    const productInfoFigure = document.createElement('figure');

    productInfoDiv.append(productInfoName, productInfoPrice, productInfoFigure);
    
    const addToCartLogo = document.createElement('img');
    addToCartLogo.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(addToCartLogo);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(img, productInfo);

    cardsContainer.append(productCard)
}
}

renderProducts(productList)


const asideProductDetail = document.querySelector('.product-detail-aside');
const cardProduct = document.querySelector('.product-card');
const closeProductDetailIcon = document.querySelector('.product-detail-close');

closeProductDetailIcon.addEventListener('click', closeProductDetail);
cardProduct.addEventListener('click', toggleAsideProductDetail);

function toggleAsideProductDetail() {

    asideProductDetail.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
    menuDesktop.classList.add('inactive')
    menuMobile.classList.add('inactive')
}



function closeProductDetail(){
    asideProductDetail.classList.add('inactive')
} 