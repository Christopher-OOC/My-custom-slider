'use strict';

const sliders = document.querySelectorAll('.slider');
const leftArrow = document.querySelector('.swipe-container.left');
const rightArrow = document.querySelector('.swipe-container.right');
const dotsContainer = document.querySelector('.dots--container');

const sliderCirle = [...sliders];

const lastSlideIndex = sliders.length - 1;

let curSlide = 0;

const midIndex = Math.trunc(sliders.length / 2);

sliders.forEach((slider, i) => {
    slider.style.transform = `translateX(${100 * i}%)`;
});

sliders.forEach((e, i) => {
    dotsContainer.insertAdjacentHTML('beforeend', `<div class="dot" data-slider-value="${i + 1}"></div>`);
});

showDot(curSlide)

leftArrow.addEventListener('click', function (e) {
    curSlide--;

    if (curSlide < 0) {
        curSlide = lastSlideIndex;
    }

    goToSlideForward(curSlide);
    showDot(curSlide);
   
});

rightArrow.addEventListener('click', function (e) {
    curSlide++;

    if (curSlide > lastSlideIndex) {
        curSlide = 0;
    }

    goToSlideForward(curSlide);
    showDot(curSlide);
});

dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
        const sliderValue = e.target.dataset.sliderValue;

        curSlide = Number(sliderValue) - 1;
        goToSlideForward(curSlide);
        showDot(curSlide);
    }
});

function goToSlideForward (sliderValue) {

   if (sliderValue <= lastSlideIndex) {


        for (let i = 0; i < curSlide; i++) {
            sliderCirle[i].style.transform = `translateX(${100 * (i - curSlide)}%)`;
        }

        for (let j = curSlide; j <= lastSlideIndex; j++) {
            sliderCirle[j].style.transform = `translateX(${100 * (j - curSlide)}%)`;
        }

   }
}

function showDot (curSlide) {
    const currentDot = document.querySelector(`.dot[data-slider-value="${curSlide + 1}"]`);
    document.querySelectorAll('.dot').forEach(d => (d.style.backgroundColor = 'white'));
    currentDot.style.backgroundColor = 'black';
}

