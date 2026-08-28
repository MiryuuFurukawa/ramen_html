document.addEventListener('DOMContentLoaded', function () {
    const pagetop = document.getElementById('pagetop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            pagetop.classList.add('visible');
        } else {
            pagetop.classList.remove('visible');
        }
    });

    pagetop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
        });
    });
});