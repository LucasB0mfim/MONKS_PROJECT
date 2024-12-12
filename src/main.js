import { cities, products, plans } from './api.js';

const cardsContainer = document.getElementById('cards-container');
const productsContainer = document.querySelector('.product__container');
const plansContainer = document.querySelector('.plan__container');

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

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product__list';
    productDiv.innerHTML = `<div class="product__card">${product.text}</div>`;
    productsContainer.appendChild(productDiv);
});

plans.forEach(plan => {
    const planDiv = document.createElement('div');
    planDiv.className = 'plan__list';
    planDiv.innerHTML = `
        <div class="plan__card">
            <h2 class="plan__card-title">${plan.title}</h2>
            <p class="plan__card-phase">${plan.phase}</p>
            <button class="plan__card-button">Lorem ipsum</button>                     
        </div>
    `;
    plansContainer.appendChild(planDiv);
});
