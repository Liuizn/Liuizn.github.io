/* show & Hidden Function -start*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const rgbButton = document.getElementById('rbg-button');

// document.documentElement.style.getPropertyValue('--hue-color')
let primaryColor = 1;

rgbButton.addEventListener('click', toggleRGBMode)

let activeRGB = setInterval(loopRGB, 20);

function toggleRGBMode() {
    if (rgbButton.classList.contains('on')) {
        clearInterval(activeRGB);
        rgbButton.classList.remove('on');
    } else {
        activeRGB = setInterval(loopRGB, 20);
        rgbButton.classList.add('on');
    }
};

function loopRGB() {
    document.documentElement.style.setProperty('--hue-color', primaryColor.toString());

    primaryColor = +primaryColor == 360 ? primaryColor = 1 : primaryColor = +primaryColor + 1;
}


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

/*end -acordeão stack*/

/* Portfólio function*/
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,

    keyboard: {
        enabled: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* start- Scroll Sections Active Link*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/* end- Scroll Sections Active Link*/

/*start- Change background Header*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*end- Change background Header*/

/*start- show scroll*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //Quando a rolagem é superior a 560 de altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scroll-top
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*end- show scroll*/

/* Dark-Light Theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : ' uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
}) 