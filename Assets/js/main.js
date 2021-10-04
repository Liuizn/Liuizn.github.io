/* show & Hidden Function -start*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*show - validando se a constante existe*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*hidden - validanto se a constante existe*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/* show & Hidden Function -end*/

/*Remove Menu Mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*start -acordeão stack*/
const stackContent = document.getElementsByClassName('stack__content')
const stackHeader = document.querySelectorAll('.stack__header')

function toggleStacks() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < stackContent.length; i++) {
        stackContent[i].className = 'stack__content stack__close'
    }

    if (itemClass === 'stack__content stack__close') {
        this.parentNode.className = 'stack__content stack__open'
    }
}

stackHeader.forEach((el) => {
    el.addEventListener('click', toggleStacks)
})


/*end -acordeão stack*/

/* Portfólio function*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickabe: true,
    },
});