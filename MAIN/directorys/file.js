document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', () => {
        const audioPlayer = button.parentElement.nextElementSibling;
        const progressBar = button.parentElement.nextElementSibling.nextElementSibling.firstElementChild;
        const timeInfo = button.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;

        if (audioPlayer.paused) {
            audioPlayer.play();
            button.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            button.textContent = 'Play';
        }

        audioPlayer.addEventListener('timeupdate', () => {
            const currentTime = formatTime(audioPlayer.currentTime);
            const duration = formatTime(audioPlayer.duration);
            timeInfo.textContent = `${currentTime} / ${duration}`;

            const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        });

        progressBar.parentElement.addEventListener('click', (e) => {
            const rect = progressBar.parentElement.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const newTime = (offsetX / rect.width) * audioPlayer.duration;
            audioPlayer.currentTime = newTime;
        });
    });
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}