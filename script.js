const sliderImages = ["https://www.simplyrecipes.com/thmb/OR4scY3zn-d5RDuic4CAOOJ1604=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__03__Mexican-Avocado-Toast-1-eaca457dce4545359ca9a844275444c8.jpg", "https://www.simplyrecipes.com/thmb/VvdZ84gnKKyehQi3Iq6io0rx2OA=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__08__Grilled-Cheese-BLT-LEAD-1-9e3e62e6a574457bb8c7532f9db56bd2.jpg", "https://www.simplyrecipes.com/thmb/GAEV3EF-KzgE9UiTBZuRnBdcYLI=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__EYF-Kale-Pesto-LEAD-4-67fd9dc1697d4ceb9c852c4efb11c066.jpg", "https://www.simplyrecipes.com/thmb/Yl9xMsrV2oSJ3UWv96ZuDiykZwQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__white-bean-tuna-salad-vertical-a-1600-1a299fa7f7234e9bbb409718a75887f9.jpg"];
const sliderHeaders = ['Avocado Toasts', 'Grilled Cheese BLT', 'Rotini With Pesto', 'Bean and Tuna Salad'];

const sliderImageActive = document.querySelector('.slider-image_active');
const sliderImageLeft = document.querySelector('.slider-image_one');
const sliderImageRight = document.querySelector('.slider-image_three');
const sliderHeader = document.querySelector('.slider__block__header');

const btnNext = document.querySelector('.btn-icon_right');
const btnBack = document.querySelector('.btn-icon_left');

let i = 1;
let a = 0;
let b = 2;

btnNext.addEventListener('click', () => {
    i++;
    a++;
    b++;

    if (i > sliderImages.length-1) {
        i = 0;
    }
    if (a > sliderImages.length-1) {
        a = 0;
    }
    if (b > sliderImages.length-1) {
        b = 0;
    }

    sliderImageActive.src = sliderImages[i];
    sliderImageLeft.src = sliderImages[a];
    sliderImageRight.src = sliderImages[b];
    sliderHeader.innerText = sliderHeaders[i];
});

btnBack.addEventListener('click', () => {
    i--;
    a--;
    b--;

    if (i < 0) {
        i = sliderImages.length-1;
    }
    if (a < 0) {
        a = sliderImages.length-1;
    }
    if (b < 0) {
        b = sliderImages.length-1;
    }

    sliderImageActive.src = sliderImages[i];
    sliderImageLeft.src = sliderImages[a];
    sliderImageRight.src = sliderImages[b];
    sliderHeader.innerText = sliderHeaders[i];
})

const menuItem = document.querySelectorAll('.list__item');

menuItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('img').style.display = 'block';
    })

    item.addEventListener('mouseout', () => {
        item.querySelector('img').style.display = 'none';
    })
})

const inputSearch = document.querySelector('.input-field');
const recipeBlocks = document.querySelectorAll('.recipe-block');
const recipeBlockParent = document.querySelector('.list-column');

inputSearch.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();

    recipeBlocks.forEach(item => {
        item.querySelector('.recipe-block__header').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})

const btnSortByStars = document.querySelector('.sort-type-complexity');
const arrayBlocks = Array.from(recipeBlocks);
const btnSortByAlphabet = document.querySelector('.sort-type-alphabet');

btnSortByStars.addEventListener('click', () => {
    if (!(btnSortByStars.classList.contains('filter-item-clicked')) || btnSortByStars.classList.contains('filter-item-clicked_twice')) {
        arrayBlocks.sort(function(a,b) {
            if (Array.from(a.querySelectorAll('.icon-star')).length > Array.from(b.querySelectorAll('.icon-star')).length) {
                return 1;
            }
            if (Array.from(a.querySelectorAll('.icon-star')).length < Array.from(b.querySelectorAll('.icon-star')).length) {
                return -1;
            }
            return 0;
        })
        .forEach(function(item) {
            recipeBlockParent.appendChild(item);
        })
        btnSortByStars.classList.add('filter-item-clicked');
        if (btnSortByStars.classList.contains('filter-item-clicked_twice')) {
            btnSortByStars.classList.remove('filter-item-clicked_twice');
        }
        if (btnSortByAlphabet.classList.contains('filter-item-clicked')) {
            btnSortByAlphabet.classList.remove('filter-item-clicked');
        }
        if (btnSortByAlphabet.classList.contains('filter-item-clicked_twice')) {
            btnSortByAlphabet.classList.remove('filter-item-clicked_twice');
        }
    } else if (btnSortByStars.classList.contains('filter-item-clicked')) {
        arrayBlocks.sort(function(a,b) {
            if (Array.from(a.querySelectorAll('.icon-star')).length < Array.from(b.querySelectorAll('.icon-star')).length) {
                return 1;
            }
            if (Array.from(a.querySelectorAll('.icon-star')).length > Array.from(b.querySelectorAll('.icon-star')).length) {
                return -1;
            }
            return 0;
        })
        .forEach(function(item) {
            recipeBlockParent.appendChild(item);
        })
        btnSortByStars.classList.add('filter-item-clicked_twice');
    }
})

btnSortByAlphabet.addEventListener('click', () => {
    if (!(btnSortByAlphabet.classList.contains('filter-item-clicked')) || btnSortByAlphabet.classList.contains('filter-item-clicked_twice')) {
        arrayBlocks.sort(function(a,b) {
            if (a.querySelector('.recipe-block__header').innerText > b.querySelector('.recipe-block__header').innerText) {
                return 1;
            }
            if (a.querySelector('.recipe-block__header').innerText < b.querySelector('.recipe-block__header').innerText) {
                return -1;
            }
            return 0;
        })
        .forEach(function(item) {
            recipeBlockParent.appendChild(item);
        })
        btnSortByAlphabet.classList.add('filter-item-clicked');
        if (btnSortByAlphabet.classList.contains('filter-item-clicked_twice')) {
            btnSortByAlphabet.classList.remove('filter-item-clicked_twice');
        }
        if (btnSortByStars.classList.contains('filter-item-clicked')) {
            btnSortByStars.classList.remove('filter-item-clicked');
        }
        if (btnSortByStars.classList.contains('filter-item-clicked_twice')) {
            btnSortByStars.classList.remove('filter-item-clicked_twice');
        }
    } else if (btnSortByAlphabet.classList.contains('filter-item-clicked')) {
        arrayBlocks.sort(function(a,b) {
            if (a.querySelector('.recipe-block__header').innerText < b.querySelector('.recipe-block__header').innerText) {
                return 1;
            }
            if (a.querySelector('.recipe-block__header').innerText > b.querySelector('.recipe-block__header').innerText) {
                return -1;
            }
            return 0;
        })
        .forEach(function(item) {
            recipeBlockParent.appendChild(item);
        })
        btnSortByAlphabet.classList.add('filter-item-clicked_twice');
    }
})

const btnFilters = Array.from(document.querySelectorAll('.filter-type-item'));
const btnFiltersArray = [];

btnFilters.forEach(item => {
    item.addEventListener('click', () => {
        if (!(item.classList.contains('filter-item-clicked'))) {
            btnFiltersArray.unshift(`${item.innerText}`);
            item.classList.add('filter-item-clicked');
        } else {
            const itemIndex = btnFiltersArray.indexOf(`${item.innerText}`);
            btnFiltersArray.splice(itemIndex, 1);
            item.classList.remove('filter-item-clicked');
        }

        arrayBlocks.forEach(itemBlock => {
            itemBlock.style.display = 'block';
        })

        btnFiltersArray.forEach(itemFilter => {
            arrayBlocks.forEach(itemBlock => {
               if (!itemBlock.querySelector('.filters').textContent.toLowerCase().includes(itemFilter)) {
                itemBlock.style.display = 'none';
               }
            })
        })
    })
})

