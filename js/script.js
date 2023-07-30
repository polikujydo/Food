import calculator from './modules/calculator';
import cards from './modules/cards';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    calculator()
    cards()
    modal('[data-modal]', '.modal', '[data-close]')
    slider({
        slidesSelector: '.offer__slide',
        prevArrowSelector: '.offer__slider-prev',
        nextArrowSelector: '.offer__slider-next',
        totalSelector: '#total',
        currentSelector: '#current',
        slidesWrapperSelector: '.offer__slider-wrapper',
        slideInnerSelector: '.offer__slider-inner'
    })
    tabs('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active')
    timer('.timer', '2024-01-01')
})

