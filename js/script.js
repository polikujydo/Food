window.addEventListener('DOMContentLoaded', () => {
    // TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsParent = document.querySelector('.tabheader__items'),
          tabsContent = document.querySelectorAll('.tabcontent');

//Hide tabsContent Func
    function hideTabContent(){
        tabsContent.forEach(eachTabContent => {
            eachTabContent.classList.add('hide'),
            eachTabContent.classList.remove('show', 'fade')
        })
        tabs.forEach(eachTab => {
            eachTab.classList.remove('tabheader__item_active')
        })
    }

//Show tabsContent Func
    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade'),
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }
    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((eachTab, i) => {
                if (target == eachTab){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })

    //MODAL
    const openModalButton = document.querySelectorAll('[data-modal]'),
          closeModalButton = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');

//Open modal Func
    function openModal(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }

    openModalButton.forEach(eachBtn => {
        eachBtn.addEventListener('click', openModal)
    })

//Close modal Func
    function closeModal(){
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    closeModalButton.addEventListener('click', closeModal)

    modal.addEventListener('click', (event) => {
        if(event.target == modal){
            closeModal()
        }
    })

    document.addEventListener('keydown', (event) => {
        if(event.code == 'Escape'){
            closeModal()
        }
    })

    // TIMER

    const deadLine = '2024-01-01';

//deadLine & currentTime offset Func
    function timeRemaining(deadLine){
        const totalTime = Date.parse(deadLine) - Date.parse(new Date()), //ms to deadLine - current time
              days = Math.floor(totalTime / (1000 * 60 * 60 * 24)),
              hours = Math.floor((totalTime / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((totalTime / (1000 * 60) % 60)),
              seconds = Math.floor((totalTime / 1000) % 60);
        return {
            'total': totalTime,
            'days': days,
            "hours": hours,
            "minutes": minutes,
            "seeconds": seconds
        }
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`
        } else{
           return num
        }
    }

    function setClock(selector, deadLine){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
              
        updateClock();
        
        function updateClock(){
            const totalTime = timeRemaining(deadLine)

            days.innerText = getZero(totalTime.days)
            hours.innerText = getZero(totalTime.hours)
            minutes.innerText = getZero(totalTime.minutes)
            seconds.innerText = getZero(totalTime.seeconds)

            if (totalTime.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine)

    // SLIDER

    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll('.offer__slide'),
          prevArrow = document.querySelector('.offer__slider-prev'),
          nextArrow = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesWidth = window.getComputedStyle(slidesWrapper).width,
          slidesInner = document.querySelector('.offer__slider-inner');

//Nums
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent =  slideIndex;
    }
    
    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = slidesWidth;
    });

//Arrows
    nextArrow.addEventListener('click', () => {
        if (offset == (+slidesWidth.slice(0, slidesWidth.length - 2) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += +slidesWidth.slice(0, slidesWidth.length - 2); 
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });

    prevArrow.addEventListener('click', () => {
        if (offset == 0) {
            offset = +slidesWidth.slice(0, slidesWidth.length - 2) * (slides.length - 1);
        } else {
            offset -= +slidesWidth.slice(0, slidesWidth.length - 2);
        }

        slidesInner.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = eachSlide.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });

    // CALCULATOR

    const result = document.querySelector('.calculating__result span');
    
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

//Total calc Func
    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        }
        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

//LocalStorage func
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

//Receiving static info Func
    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

//Receiving input info Func
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
})

