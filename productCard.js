export class Product {
    constructor(name, price, img, href) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.href = href;
    }
}

export const mainContent = document.querySelector('.main-content');

export function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    mainContent.appendChild(card);

    const imgWrapper = document.createElement('a');
    imgWrapper.classList.add('product-img-wrapper');
    imgWrapper.href = product.href;
    card.appendChild(imgWrapper);

    const img = document.createElement('img');
    img.src = product.img;
    img.classList.add('product-img');
    imgWrapper.appendChild(img);

    const productDetails = document.createElement('p');
    productDetails.classList.add('product-details');
    productDetails.innerHTML = `${product.name} <span class="product-price">$ ${product.price}</span>`;
    card.appendChild(productDetails);   
}
