// Importando os dados simulados da 'api' mockada
import { cities, products, plans } from './api/api.js';

// Função para criar a div
function createElement(container, className, content) {
    const div = document.createElement('div');
    div.className = className;
    div.innerHTML = content;
    container.appendChild(div);
}

// Criando cards
cities.forEach(city => {
    const content = `
        <div class="card__image"><img src="${city.image}" alt="${city.title}"></div>
        <h3 class="card__title">${city.title}</h3>
        <p class="card__description">${city.description}</p>
    `;
    createElement(cardsContainer, 'card__list', content);
});

// Criando produtos
products.forEach(product => {
    const content = `<div class="product__card">${product.text}</div>`;
    createElement(productsContainer, 'product__list', content);
});

// Criando planos
plans.forEach(plan => {
    const content = `
        <div class="plan__card">
            <h2 class="plan__card-title">${plan.title}</h2>
            <p class="plan__card-description">${plan.phase}</p>
            <button class="plan__card-button">Ver Detalhes</button>
        </div>
    `;
    createElement(plansContainer, 'plan__list', content);
});

document.addEventListener('DOMContentLoaded', () => {
    // Função para selecionar elementos com base na classe
    function getInputElement(className) {
        return document.querySelector(`${className}`);
    }

    // Função para gerar números aleatórios
    function generateRandomNumber() {
        return Math.floor(Math.random() * 1000);
    }

    // Função para definir valores em elementos de input
    function setInputValue(elements, values) {
        if (elements.length >= 2) {
            elements[0].value = values[0];
            elements[1].value = values[1];
        }
    }

    // Função para gerar números e renderizar nos campos de input
    function generatedNumbers() {
        const inputNumber = getInputElement('.validate__math-input');
        const firstNumber = generateRandomNumber();
        const lastNumber = generateRandomNumber();
        setInputValue(inputNumber, [firstNumber, lastNumber]);
    }

    generatedNumbers();

    // A partir daqui começam os scripts para gerenciar o menu hamburguer...
    const openMenu = () => {
        nav.classList.add('active');
    };

    const closeMenu = () => {
        nav.classList.remove('active');
    };

    // Função para adicionar eventos de clique
    function handleMenu(tag, action) {
        tag.addEventListener('click', (event) => {
            event.stopPropagation();
            action();
        });
    }

    const hamburgerOutside = getInputElement('.header__start-top .hamburger');
    const hamburgerInside = getInputElement('.hamburger-inside');
    const backImage = getInputElement('.header__nav-image');
    const nav = getInputElement('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav-link');
    const navBackground = getInputElement('.header__nav-background');

    handleMenu(hamburgerOutside, openMenu);
    handleMenu(hamburgerInside, closeMenu);
    handleMenu(backImage, closeMenu);

    // Fecha o menu após clicar em algum atalho
    navLinks.forEach(link => handleMenu(link, closeMenu));

    // Fecha o menu ao clicar na área de fundo
    document.addEventListener('click', (event) => {
        if (navBackground.contains(event.target)) {
            closeMenu();
        }
    });
});