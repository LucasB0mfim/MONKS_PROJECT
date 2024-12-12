import { cities, products, plans } from './api.js';

const cardsContainer = document.querySelector('.cards');
const productsContainer = document.querySelector('.product__container');
const plansContainer = document.querySelector('.plan__container');

cities.forEach(city => {
    const card = document.createElement('div');
    card.className = 'card__list';
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

document.addEventListener('DOMContentLoaded', () => {
    const securityForm = document.querySelector('.validate__security-form');
    const mathInputs = document.querySelectorAll('.validate__math-input');
    const mathResultInput = document.querySelector('.validate__math-result');
    const validateButton = document.querySelector('.validate__button-send');

    let firstNumber;
    let secondNumber;

    function generateRandomNumbers() {
        firstNumber = Math.floor(Math.random() * 1000);
        secondNumber = Math.floor(Math.random() * 1000);
        
        mathInputs[0].value = firstNumber;
        mathInputs[1].value = secondNumber;

        mathResultInput.value = '';
    }

    generateRandomNumbers();

    function validate(event) {
        event.preventDefault();

        const userResult = Number(mathResultInput.value);
        const correctResult = firstNumber + secondNumber;

        if (userResult === correctResult) {
            alert('Parabéns! Resultado correto.');
            generateRandomNumbers();
        } else {
            alert('Ops! Resultado incorreto. Tente novamente.');
        }
    }

    // Adicione um preventDefault no submit do formulário
    securityForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    // Use click no botão
    validateButton.addEventListener('click', validate);
});