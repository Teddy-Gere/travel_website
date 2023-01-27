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



/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


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



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// scroll to the top

const scrollTop=document.querySelector(".scroll__up")

window.addEventListener('scroll',()=>{
    const scrollY=window.scrollY
    if(scrollY>200){
        scrollTop.classList.add('show')
    }else{
        scrollTop.classList.remove('show')
    }
})