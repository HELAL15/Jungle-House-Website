///////////////////////// start nav //////////////////////////////////
let menu = document.getElementById('menu-icon');
let menu_item = document.getElementById('menu-item');

menu.addEventListener('click' , ()=>{
  menu.classList.toggle('fa-close');
  menu_item.classList.toggle('hide');
});

// change background color for nav on scroll

function changeBG() {
  let scroll = window.scrollY;
  let nav = document.getElementById('nav');
  // Compare the scroll position to 150
  if (scroll < 200) {
    nav.classList.remove('bgColor'); // Remove the 'bgColor' class
  } else {
    nav.classList.add('bgColor');    // Add the 'bgColor' class
  }
}
window.addEventListener('scroll', changeBG);

////////////////////////////// end nav //////////////////////////////////
const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rlt') {
  rtlValue = true;
}

$('.owl-carousel.partners').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  autoplay:false,
  autoplayTimeout:3500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


$('.owl-carousel').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoplay:true,
  autoplayTimeout:3500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

