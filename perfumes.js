import { Product, createProductCard } from "./productCard.js";


const perfumeProducts = []; 
const href = './product-page.html';

perfumeProducts.push(new Product('Perfume', '100.99', './images/perfumes1.jpg', href));
perfumeProducts.push(new Product('Perfume', '100.99', './images/perfumes2.jpg', href));
perfumeProducts.push(new Product('Perfume', '100.99', './images/perfumes3.jpg', href));
perfumeProducts.push(new Product('Perfume', '100.99', './images/perfumes4.jpg', href));
perfumeProducts.push(new Product('Perfume', '100.99', './images/perfumes5.jpg', href));


perfumeProducts.forEach(product => {
    createProductCard(product);
})
