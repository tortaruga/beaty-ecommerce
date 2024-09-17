import { Product, createProductCard } from "./productCard.js";

const makeupProducts = []; 
const href = './product-page.html';

makeupProducts.push(new Product('Makeup', '10.99', './images/makeup1.jpg', href));
makeupProducts.push(new Product('Makeup', '10.99', './images/makeup2.jpg', href));
makeupProducts.push(new Product('Makeup', '10.99', './images/makeup3.jpg', href));
makeupProducts.push(new Product('Makeup', '10.99', './images/makeup4.jpg', href));
makeupProducts.push(new Product('Makeup', '10.99', './images/makeup5.jpg', href));


makeupProducts.forEach(product => {
    createProductCard(product);
})
