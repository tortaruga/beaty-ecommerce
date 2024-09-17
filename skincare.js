import { createProductCard, Product } from "./productCard.js";

const skincareProducts = [];

const href = './product-page.html';

skincareProducts.push(new Product('Skincare', '10.99', './images/skincare1.jpg', href));
skincareProducts.push(new Product('Skincare', '10.99', './images/skincare2.jpg', href));
skincareProducts.push(new Product('Skincare', '10.99', './images/skincare3.jpg', href));
skincareProducts.push(new Product('Skincare', '10.99', './images/skincare4.jpg', href));
skincareProducts.push(new Product('Skincare', '10.99', './images/skincare5.jpg', href));
skincareProducts.push(new Product('Skincare', '10.99', './images/skincare6.jpg', href));


skincareProducts.forEach(product => {
    createProductCard(product);
})
