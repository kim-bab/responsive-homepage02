const container = document.querySelectorAll('.main-wrapper section');

const pauseBtn = document.querySelector('.swiper-button-pause');
const playBtn = document.querySelector('.swiper-button-play');
const stopBtn = document.querySelector('.swiper-button-stop');
const hamburgerMenu = document.querySelector('.hamburger');
const hiddenMenu = document.querySelector('.menu');
const menuList = document.querySelectorAll('.menu ul li');
const menuSpanOne = document.querySelectorAll('.hamburger span');


  menuList.forEach((items) => {
    items.addEventListener('click', (e) => {
      e.preventDefault();

      const getTarget = e.target;
      const getHref = getTarget.getAttribute('href').slice(1);

      container.forEach((contents) => {
        const getOffset = contents.offsetTop;
        if(getHref === contents.id){
          window.scroll({
            top: getOffset,
            behavior: 'smooth'
          })
        }
      })
      

      console.log(getHref,getTarget);
    })
  })


let num = 0;

hamburgerMenu.addEventListener('click', () => {
  num++;
  if(num%2 == 1){
    hiddenMenu.classList.add('menu-show');
      menuSpanOne[0].classList.add('h1');
      menuSpanOne[1].classList.add('h2');
      menuSpanOne[2].classList.add('h3');
  }else if(num%2 == 0){
    hiddenMenu.classList.remove('menu-show');
      menuSpanOne[0].classList.remove('h1');
      menuSpanOne[1].classList.remove('h2');
      menuSpanOne[2].classList.remove('h3');
  }
})

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  slidesPerGroup : 1,
  loop: false,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
    type: 'bullets',
},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


stopBtn.addEventListener('click', () => {
  mySwiper.autoplay.start();
  playBtn.classList.remove('play-active');
  stopBtn.classList.remove('stop-active');
})

playBtn.addEventListener('click', () => {
  console.log('d');
  mySwiper.autoplay.stop();
  playBtn.classList.add('play-active');
  stopBtn.classList.add('stop-active');
})