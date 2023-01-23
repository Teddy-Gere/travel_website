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