const themeButton=document.querySelector('#theme-button')
themeButton.addEventListener('click',()=>{
    themeButton.classList.toggle('ri-sun-line')
    document.body.classList.toggle('dark__theme')
})


const menuButton=document.querySelector('.menu__button')
const closeButton=document.querySelector('#nav-close')

const menuHandler=()=>{
    let navbar=document.querySelector('.nav')
    navbar.classList.toggle('show')
    document.body.classList.toggle('no-scroll')
}

menuButton.addEventListener('click',menuHandler)
closeButton.addEventListener('click',menuHandler)


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})
