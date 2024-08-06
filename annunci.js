/* navbar */
let nav = document.querySelector('.mynav');
let linkNav = document.querySelectorAll('.nav_link');
let imgLogo = document.querySelector('.img_logo')

console.dir(imgLogo)
window.addEventListener('scroll', () => {
    let = scrolled = window.scrollY;
    if (scrolled > 0) {

        changenavbar('nav_bg', 'var(--sec-color)', 'transparent', 'transparent', 'logo-no-background')

    }
    else {
        nav.classList.remove('nav_blur');
        changenavbar('nav_blur', 'var(--main-color)', ' 1px solid var(--main-color)', 'transparent', 'logo-white');
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


/* fine navbar */


/* inserisco file json */

fetch('./annunci.json').then((response) => response.json()).then((data) => {
    console.log(data);

    // creazione filtro per categorie
    let categoryWrapper = document.querySelector('#categoryWrapper');

    function setCategory(params) {

        let category = data.map((annuncio) => annuncio.category);
        let uniqueCategory = [];

        category.forEach((category) => {
            if (!uniqueCategory.includes(category)) {
                uniqueCategory.push(category);
            }
        });

        uniqueCategory.forEach((category) => {
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="category" id="${category}">
            <label class="form-check-label" for="${category}">
              ${category}
            </label>
            `;
            categoryWrapper.appendChild(div);
        });
    }
    setCategory();



    // creazione card con gli annunci

    let cardWrapper = document.querySelector('#cardWrapper');

    function showCards(card) {
        card.sort((a, b) => b.price - a.price);
        cardWrapper.innerHTML = '';

        card.forEach((annuncio) => {
            let div = document.createElement('div');
            div.classList.add('card', 'rounded-0', 'p-0', 'mb-3');
            div.style.width = '300px';
            div.innerHTML = `
            <img src="${annuncio.image}" class="card-img-top" alt="articolo 1">
            <div class="card-body card-custom">
              <h5 class="card-title">${annuncio.name}</h5>
              <p class="card-text">${annuncio.category}</p>
              <p class="card-text">${annuncio.price}€</p>
              <a href="#" class="btn btn-custom">Aggiungi</a>
            </div>
            `;
            cardWrapper.appendChild(div);
        });
    }
    showCards(data);



    // creiamo i filti per le nostre card

    // input radio
    let radios = document.querySelectorAll('.form-check-input');


    function filterByCategory() {
        let checked = Array.from(radios).find((button) => button.checked);
        let categoria = checked.id;

        if (categoria != 'all') {
            let filtered = data.filter((annuncio) => annuncio.category == categoria);
            showCards(filtered);
        } else {
            showCards(data);
        };
    }
    filterByCategory();

    radios.forEach((button) => {
        button.addEventListener('click', () => {
            filterByCategory();
        });
    });


    // impostiamo il filtro per prezzo

    let inputRange = document.querySelector('#inputRange');
    let textPrice = document.querySelector('#textPrice');

    function setPriceInput() {
        let maxPrice = data[0].price;
        inputRange.max = maxPrice;
        inputRange.value = maxPrice;
        textPrice.innerHTML = maxPrice;
    }
    setPriceInput();

    inputRange.addEventListener('input', () => {
        textPrice.innerHTML = inputRange.value;
        filterByPrice();
    });

    function filterByPrice() {
        let filtered = data.filter((annuncio) => +annuncio.price <= +inputRange.value);
        showCards(filtered);
    };

    // impostiamo il filtro per parola

    let inputWord = document.querySelector('#inputWord');

    inputWord.addEventListener('input', () => {
        filterByWord();
    });

    function filterByWord() {
        let filtered = data.filter((annuncio) => annuncio.name.toLowerCase().includes(inputWord.value.toLowerCase()));
        showCards(filtered);
    };




    // end of fetch
});
