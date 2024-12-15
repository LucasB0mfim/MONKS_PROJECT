// Importando os dados simulados da 'api' mockada
import { projects, services, plans } from './api/api.js';

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerOutside = getInputElement('.header__start-top .hamburger');
    const hamburgerInside = getInputElement('.hamburger-inside');
    const backImage = getInputElement('.header__nav-image');
    const nav = getInputElement('.header__nav');
    const navBackground = getInputElement('.header__nav-background');
    const navLinks = document.querySelectorAll('.header__nav-link');

    const projectsContainer = getInputElement('.projects__container');
    const servicesContainer = getInputElement('.services__container');
    const plansContainer = getInputElement('.plans__container');

    const form = getInputElement('.validate__security-form');
    const inputNumberForm = document.querySelectorAll('.validate__math-input');
    const responseForm = getInputElement('.validate__math-result');
    const inputRequired = document.querySelectorAll('.validate__input');
    
    // Função para gerenciar o valor do data-aos
    function updateAOSValue() {
        const screenWidth = window.innerWidth;
        const setValues = [
            { className: 'projects__container', desktop: 500, mobile: 300 },
            { className: 'essence', desktop: 1100, mobile: 300 },
            { className: 'download', desktop: 1100, mobile: 300 },
            { className: 'services', desktop: 1100, mobile: 300 },
            { className: 'plans', desktop: 1200, mobile: 300 },
        ];

        setValues.forEach(config => {
            const sections = document.querySelectorAll(`.${config.className}`);
            sections.forEach(section => {
                const offsetValue = screenWidth > 1024 ? config.desktop : config.mobile;
                section.setAttribute('data-aos-offset', offsetValue);
            });
        });

        AOS.refresh();
    };

    updateAOSValue();
    AOS.init();
    AOS.refresh();
    window.addEventListener('resize', updateAOSValue);

    // Função para selecionar elementos com base na classe
    function getInputElement(className) {
        return document.querySelector(`${className}`);
    }

    // Função para adicionar eventos de clique
    function handleMenu(tag, action) {
        tag.addEventListener('click', (event) => {
            event.stopPropagation();
            action();
        });
    }
    
    // Função para criar a div
    function createElement(container, className, content) {
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = content;
        container.appendChild(div);
    }
    
    // Função para gerar números aleatórios
    function generateRandomNumber() {
        return Math.floor(Math.random() * 200);
    }

    // Função para definir valores em elementos de input
    function setInputValue(elements, values) {
        if (elements.length >= 2) {
            elements[0].value = values[0];
            elements[1].value = values[1];
        }
    }

    // Armazena a resposta correta
    let sum = 0;

    // Função para gerar números e renderizar nos campos de input
    function generatedNumbers() {
        const firstNumber = generateRandomNumber();
        const lastNumber = generateRandomNumber();
        setInputValue(inputNumberForm, [firstNumber, lastNumber]);
        sum = firstNumber + lastNumber;
    }
    
    // Função para verificar a resposta do usuário
    function generatedResponse(event) {
        event.preventDefault();
        if (parseInt(responseForm.value) === sum) {
            alert('Parabéns! Tome um cookie como recompensa 🍪.');
            inputRequired.forEach(input => input.value = '');
            responseForm.value = '';
        } else {
            alert('Ops... Você errou! Tente de novo, você consegue!');
            responseForm.value = '';
        }
    }

    generatedNumbers();

    const openMenu = () => {
        nav.classList.add('active');
    };

    const closeMenu = () => {
        nav.classList.remove('active');
    };

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

    // Criando cards
    projects.forEach(project => {
        const content = `
            <div class="project__image"><img src="${project.image}" alt="${project.title}"></div>
            <h3 class="project__title">${project.title}</h3>
            <p class="project__description">${project.description}</p>
        `;
        createElement(projectsContainer, 'project__list', content);
    });
    
    // Criando produtos
    services.forEach(service => {
        const content = `<div class="service__card">${service.text}</div>`;
        createElement(servicesContainer, 'service__list', content);
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

    form.addEventListener('submit', (event) => {
        generatedResponse(event);
    });
});