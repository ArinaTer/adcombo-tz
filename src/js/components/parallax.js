export function parallax() {
    const bubbleLeft = document.querySelector('.bubbles--left');
    const bubbleRight = document.querySelector('.bubbles--right');

    if (!bubbleLeft || !bubbleRight) return;

    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;

        const intensity = 10;

        const leftX = mouseX * intensity;
        const leftY = mouseY * intensity;
        const rightX = -mouseX * intensity;
        const rightY = -mouseY * intensity;

        bubbleLeft.style.transform = `translate(0%, -50%) translate(${leftX}px, ${leftY}px)`;
        bubbleRight.style.transform = `translate(0%, -50%) translate(${rightX}px, ${rightY}px)`;
    });
}
