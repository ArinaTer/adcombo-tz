import { queryMatches } from "../modules/functions.js";

export function slider() {
    let swiper;

    function initSlider() {
        const Mobile = queryMatches(767.98, "max");
        const Desktop = queryMatches(768, "min");
        const swiperElement = document.querySelector(".credits__swiper");
        const wrapper = document.querySelector(".credits__swiper-wrapper");
        const slides = document.querySelectorAll(".credits__swiper-slide");

        if (swiper) {
            swiper.destroy();
            swiper = null;
        }

        if (Mobile) {
            swiper = new Swiper(".credits__swiper", {
                pagination: {
                    el: ".credits__swiper-pagination",
                },
                slidesPerView: 1,
                spaceBetween: 10,
            });
        } else if (Desktop) {
            handleDesktopLayout(wrapper, slides);
        }
    }

    function handleDesktopLayout(wrapper, slides) {
        const existingWrapper = wrapper.querySelector(".credits__stretched-wrapper");
        if (existingWrapper) {
            existingWrapper.replaceWith(...existingWrapper.children);
        }

        wrapper.classList.remove("credits__has-stretched");

        const containerWidth = wrapper.offsetWidth;
        const slideWidth = 150;
        const gap = 20;
        const columns = Math.floor((containerWidth + gap) / (slideWidth + gap));
        const totalSlides = slides.length;

        if (totalSlides > columns) {
            wrapper.classList.add("credits__has-stretched");

            const stretchedSlides = Array.from(slides).slice(columns);

            const stretchedWrapper = document.createElement("div");
            stretchedWrapper.classList.add("credits__stretched-wrapper");

            stretchedSlides.forEach((slide) => {
                stretchedWrapper.appendChild(slide);
            });

            const lastFirstRowSlide = slides[columns - 1];
            if (lastFirstRowSlide && lastFirstRowSlide.parentNode === wrapper) {
                wrapper.insertBefore(stretchedWrapper, lastFirstRowSlide.nextSibling);
            } else {
                wrapper.appendChild(stretchedWrapper);
            }

            slides.forEach((slide) => {
                slide.style.width = "";
                slide.style.minWidth = "";
                slide.style.maxWidth = "";
            });
        } else {
            slides.forEach((slide) => {
                slide.style.width = "150px";
                slide.style.minWidth = "150px";
                slide.style.maxWidth = "150px";
            });
        }
    }

    initSlider();

    window.addEventListener("resize", initSlider);
}
