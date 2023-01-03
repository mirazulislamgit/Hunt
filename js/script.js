$(function (){
    $('.banner-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:'.left-arrow',
        nextArrow:'.right-arrow',
      });

    $('.services-area').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical:true,
        arrows:true,
        centerMode:true,
        centerPadding:'0px',
        prevArrow:'.services-slider-top-button',
        nextArrow:'.services-slider-bottom-button',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical:false,
            }
          },
        ]
      });

    $('.rev-text-area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical:true,
        arrows:false,
        asNavFor:".rev-profile-area",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical:false,
            }
          },
        ]
      });

    $('.rev-profile-area').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical:true,
        arrows:true,
        centerMode:true,
        centerPadding:'0px',
        prevArrow:'.rev-top-btn',
        nextArrow:'.rev-bottom-btn',
        asNavFor:".rev-text-area",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical:false,
            }
          },
        ]
      });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.partner-item-area').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical:false,
        arrows:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
        ],
        
      });

//Start Sticky Menu

      $(window).on('scroll', function(){
        let sticky = $(this).scrollTop()
        if(sticky > 200){
          $('.navbar').addClass('sticky-menu')
        }
        else{
          $('.navbar').removeClass('sticky-menu')
        }
      });

//End Sticky Menu

//Start Bottom to Top

  $('#btt') .on ('click', function () {
    $('html,body') .animate ({scrollTop:0}, 1000)
  });

  $(window) .on ('scroll', function () {
    let bT = $(this) .scrollTop()
    if (bT > 100){
      $('#btt') .fadeIn(100)
    }
    else{
      $('#btt') .fadeOut(100)
    }
  });

//End Bottom to Top


})

new VenoBox({
  selector: '.image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'flow'
});

// Start Hambueger Menu Area

function hambueger() {
  let hamBtn = document.getElementById("ham-activ");
  if(hamBtn.style.left <= "-100%") {
    hamBtn.style.left = "0";
  } else{
    hamBtn.style.left = "-100%";
  }
};

// End Hambueger Menu Area