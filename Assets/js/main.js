/* show & Hidden Function -start*/

    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
    
    /*show - validando se a constante existe*/
    if(navToggle) {
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }
    
    /*hidden - validanto se a constante existe*/
    if(navClose) {
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })
    }
/* show & Hidden Function -end*/

/*Remove Menu Mobile*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))