let nav = document.querySelector('.mynav');
let linkNav = document.querySelectorAll('.nav_link');

window.addEventListener('scroll', () => {
    let = scrolled = window.scrollY;
    if (scrolled > 0) {
        nav.classList.add('nav_blur');
        linkNav.forEach((linkNav) => {
            linkNav.style.color = 'var(--main-color)';
        })

    }
    else {
        nav.classList.remove('nav_blur');
        linkNav.forEach((linkNav) => {
            linkNav.style.color = 'var(--sec-color)'
        })
    }

})