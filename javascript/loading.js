window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        // テスト用に3秒（3000ミリ秒）遅らせてから非表示にする
        setTimeout(() => {
            loadingScreen.classList.add('loaded');
        }, 1000);
    }
});