$(document).ready(function(){
    $('#profile__ripple').ripples({
      resolution: 512,
      dropRadius: 10,
    });
  });
  
  
  
  var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      },
      loop: true
    });
  