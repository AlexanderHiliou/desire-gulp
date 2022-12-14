$(function () {

  $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close')
  })

  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  })

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $('.contact-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
  });
  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./images/back-arrow.svg" alt="arrow left"</button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./images/next-arrow.svg" alt="arrow right"</button>'
    
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });
  
})