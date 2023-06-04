function slider(){
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
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    });
}

module.exports = slider