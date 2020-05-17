import "./style.css"

"use strict";

import {
    navButton,
    navbarOpened,
    links,
    sliderRange,
    slider,
    introduction,
    heading,
    details
} from "./js/constants";


// открывает меню в левом-углу по клику

navButton.addEventListener("click", () => {
    if (navbarOpened.classList.contains("hidden")) {
        navbarOpened.classList.add("visible");
        navbarOpened.classList.remove("hidden");
    }
    else if (navbarOpened.classList.contains("visible")) {
        navbarOpened.classList.add("hidden");
        navbarOpened.classList.remove("visible");
    }

});


// навигация по секциям страницы кликом

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    links.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.children[0].classList.add("circle_active");
        } else {
            link.children[0].classList.remove("circle_active");
        }
    });
});


//слайдер в третьем блоке

sliderRange.addEventListener(
    "input",
    () => {
        if (sliderRange.value <= "150") {
            slider.classList.add("slider__1998");
            slider.classList.remove("slider__2009");
            slider.classList.remove("slider__2016")
        } else if (sliderRange.value > "150" && sliderRange.value <= "250") {
            slider.classList.add("slider__2009");
            slider.classList.remove("slider__2016");
            slider.classList.remove("slider__1998")
        } else if (sliderRange.value > "250") {
            slider.classList.add("slider__2016");
            slider.classList.remove("slider__2009");
            slider.classList.remove("slider__1998")

        }
    },
    false
);

// слушатели на каждый блок  с ф-ми для корректного свайпа

let startPoint;
introduction.addEventListener('touchstart', (evt) => {
    startPoint = evt.touches[0].clientY;
});

introduction.addEventListener('touchmove', (evt) => {
    let touch = evt.touches[0];
    let diff = startPoint - touch.clientY;
    if (diff > 5)
        window.scrollTo(0, 768);
    else return;
})

heading.addEventListener('touchmove', (evt) => {
    let touch = evt.touches[0];
    let diff = startPoint - touch.clientY;
    if (diff > 5)
        window.scrollTo(0, 1536);
    else window.scrollTo(0, 0);
})

details.addEventListener('touchmove', (evt) => {
    let touch = evt.touches[0];
    let diff = startPoint - touch.clientY;
    if (diff < -15) {
        window.scrollTo(0, 768);
        console.log(evt)
    }
    else return;
})



