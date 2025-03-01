export function updateTimer() {
    let time = 10 * 60;
    const timerElement = document.getElementById('timer');

    const hoursElement = timerElement.querySelector('.credits__timer-digit--hours');
    const minutesElement = timerElement.querySelector('.credits__timer-digit--minutes');
    const secondsElement = timerElement.querySelector('.credits__timer-digit--seconds');

    function updateTimerDisplay() {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        if (time > 0) {
            time--;
        } else {
            time = 10 * 60;
        }
    }

    updateTimerDisplay();
    return setInterval(updateTimerDisplay, 1000);
}
