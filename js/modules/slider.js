function slider({slidesSelector, nextArrowSelector, prevArrowSelector, totalSelector, currentSelector, slidesWrapperSelector, slideInnerSelector}){
    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll(slidesSelector),
          prevArrow = document.querySelector(prevArrowSelector),
          nextArrow = document.querySelector(nextArrowSelector),
          total = document.querySelector(totalSelector),
          current = document.querySelector(currentSelector),
          slidesWrapper = document.querySelector(slidesWrapperSelector),
          slidesWidth = window.getComputedStyle(slidesWrapper).width,
          slidesInner = document.querySelector(slideInnerSelector);

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

export default slider