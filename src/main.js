import { cities } from './api/cities.cards.js';
import { products } from './api/products.list.js';

const cardsContainer = document.getElementById('cards-container');
const productsContainer = document.querySelector('.product__container'); // Corrigido para querySelector

// Renderizando os cartões de cidades
cities.forEach(city => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card__image"><img src="${city.image}" alt="${city.title}"></div>
        <h3 class="card__title">${city.title}</h3>
        <p class="card__description">${city.description}</p>
    `;

    cardsContainer.appendChild(card);
});

// Renderizando os produtos
products.forEach(product => {
    const productDiv = document.createElement('div');

    productDiv.className = 'product__list';
    productDiv.innerHTML = `<div class="product__card">${product.text}</div>`;
    productsContainer.appendChild(productDiv);
});
