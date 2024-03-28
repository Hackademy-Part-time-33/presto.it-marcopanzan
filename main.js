let nav = document.querySelector('.mynav');
let linkNav = document.querySelectorAll('.nav_link');
let imgLogo = document.querySelector('.img_logo')

console.dir(imgLogo)
window.addEventListener('scroll', () => {
    let = scrolled = window.scrollY;
    if (scrolled > 0) {
        changenavbar('nav_blur', 'var(--main-color)', ' 1px solid var(--main-color)', 'transparent', 'logo-white');


    }
    else {
        nav.classList.remove('nav_blur');
        changenavbar('nav_bg', 'var(--sec-color)', 'transparent', 'transparent', 'logo-no-background')
    }

})

function changenavbar(background, color1, color2, color3, imglogo,) {

    imgLogo.src = `http://127.0.0.1:5500/media/${imglogo}.png`;
    nav.classList.add(background);
    linkNav.forEach((linkNav) => {
        linkNav.style.color = color1;
        linkNav.addEventListener('mouseenter', () => {
            linkNav.style.borderBottom = color2;
        })
        linkNav.addEventListener('mouseleave', () => {
            linkNav.style.borderBottom = color3;
        })
    })

}

'./media/logo-white.png'
'/media/logo-no-background.png'

"http://127.0.0.1:5500/media/logo-no-background.png"
    `http://127.0.0.1:5500/media/${imgLogo}`