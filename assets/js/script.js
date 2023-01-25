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
}

menuButton.addEventListener('click',menuHandler)
closeButton.addEventListener('click',menuHandler)




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
