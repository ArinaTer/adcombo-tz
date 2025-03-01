import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

export function plugins() {
	window.Swiper = Swiper;
	window.Autoplay = Autoplay;
	window.Pagination = Pagination;
}
