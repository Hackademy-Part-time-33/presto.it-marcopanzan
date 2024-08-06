/* navbar */
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

/* funzione contatore numeri */
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
/* funzione intercettazione punto della pagina in cui cominciare il conteggio */
let confirm = false;

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        if (confirm == false && entrie.isIntersecting) {
            /* richiamo la funzione contatore */
            createinterval(3000, primonumero, 3);
            createinterval(9000, secondonumero, 1);
            createinterval(50, terzonumero, 150);
            confirm = true;
        }
    })
});

observer.observe(primonumero);


/* swiper */
const swiper = new Swiper('.swiper', {
    speed: 600,
    parallax: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/* recensioni */
let reviews = [
    { name: "Elia", title: "La mia piu' bella esperienza", description: "bellissima esperienza personale gentile, preparato, rapido , prezzi onestissimi" },
    { name: "Vincenzo", title: "Pessima esperienza", description: "sito digustoso e poco professionale" },
    { name: "Laura", title: "Esperienza COOL", description: "Accoglienza top, qualita' prodotti eccellente, lenta la spedizione " },
    { name: "Stefano", title: "Bello", description: "TOP!! :) " },
    { name: "Giammarco", title: "Altrove si trova di meglio", description: "le scarpe si sono rotte dopo 2 giorni! SCONSIGLIATO :(" },
    { name: "Rocco", title: "Bellissima esperienza", description: "Abbiamo mangiato bene ma i camerieri non sono stati professionali, comodo per il mordi e fuggi" },
];

let swiperWrapper = document.querySelector(".swiper-wrapper");
let addReviews = document.querySelector("#addReviews");
let userName = document.querySelector("#userName");
let userTitle = document.querySelector("#userTitle");
let userDescription = document.querySelector("#userDescription");


function generateCars() {
    swiperWrapper.innerHTML = '';
    reviews.forEach((review) => {
        let div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <div class="title" data-swiper-parallax="-300">${review.name}</div>
        <div class="subtitle" data-swiper-parallax="-200">${review.title}</div>
        <div class="text" data-swiper-parallax="-100">
          <p>
            ${review.description}
          </p>
        </div>
        `
        swiperWrapper.appendChild(div);
    });
}
generateCars();

addReviews.addEventListener("click", () => {
    reviews.push({ name: userName.value, title: userTitle.value, description: userDescription.value });
    generateCars();
    userName.value = '';
    userTitle.value = '';
    userDescription.value = '';
    swiper.update();
});


