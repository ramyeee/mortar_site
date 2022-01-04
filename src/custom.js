$(function(){
    /* Slick Slider - Welcome */
    $('.slideshow').slick({
      infinite: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      speed: 1000,
      pauseOnHover: false
    });
  
    /* TypeIt - Welcome */
    $('#typing').typeIt({
      strings: ["방통/바닥미장/휘니샤/기포/셀프몰탈"],
      speed: 100,
      autoStart: true,
      breakLines: false,
    });
  })