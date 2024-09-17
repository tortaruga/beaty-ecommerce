// product images carousel 

const prevImgBtn = document.querySelector('.prev-img');
const nextImgBtn = document.querySelector('.next-img');
const mainImg = document.querySelector('.main-img');

const imgs = [
    'url(./images/product1.jpg)',
    'url(./images/product2.jpg)',
    'url(./images/product3.jpg)',
];

let index = 0;

prevImgBtn.addEventListener('click', showPrevImg);
nextImgBtn.addEventListener('click', showNextImg);

function showPrevImg() {
    index--;

    if (index < 0) {
        index = imgs.length - 1; 
    }
    
    mainImg.style.background = `${imgs[index]} no-repeat`;
    centerBackground();
}

function showNextImg() {
    index++;

    if (index > imgs.length - 1) {
        index = 0; 
    }

    mainImg.style.background = `${imgs[index]} no-repeat`;
    centerBackground();
}

function centerBackground() {
    mainImg.style.backgroundPosition = 'center';
    mainImg.style.backgroundSize = 'cover';
}

