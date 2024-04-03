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
/* contatore numeri */
let primonumero = document.querySelector('#primonumero');
let secondonumero = document.querySelector('#secondonumero');
let terzonumero = document.querySelector('#terzonumero');


function createinterval(number, elemnt, speed) {
    let count = 0;
    let interval = setInterval(() => {
        if (count < number) {
            count++
            elemnt.innerHTML = count;
        }
        else {
            clearInterval(interval);
        }
    }, speed);

}

let confirm = false

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        if (confirm == false && entrie.isIntersecting) {
            createinterval(3000, primonumero, 15);
            createinterval(5000, secondonumero, 10);
            createinterval(1000, terzonumero, 20);
            confirm = true;
        }
    })
})

observer.observe(primonumero)