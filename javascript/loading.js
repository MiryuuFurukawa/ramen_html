window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('loaded');
        }, 1000);
    }
});