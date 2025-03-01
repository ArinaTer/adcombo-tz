export function header() {
    const burger = document.querySelector('.header__burger');
    const header = document.querySelector('.header');

    if (burger && header) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            header.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && !burger.contains(e.target)) {
                burger.classList.remove('active');
                header.classList.remove('active');
            }
        });
    }
}
