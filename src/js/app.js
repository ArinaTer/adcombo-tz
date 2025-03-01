import * as flsFunctions from "./modules/functions.js";


import { plugins } from "./modules/plugins.js";
import { updateTimer } from "./components/updateTimer.js";
import { slider } from "./components/slider.js"
import { parallax } from "./components/parallax.js"
import { header } from "./components/header.js"


plugins();

Swiper.use([Autoplay, Pagination]);

window.addEventListener("load", () => {
    updateTimer()
    slider()
    parallax();
    header()
})
