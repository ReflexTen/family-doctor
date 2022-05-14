$(function () {
  //------------burger-menu----------//
  $('.burger').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('lock');
  })

  $('.menu__link').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('body').removeClass('lock');
  })

  $('.menu__cross').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('body').removeClass('lock');
  })

  let btnCategories = $(".burger");
  let categories = $(".menu");

  $(document).mouseup(function (e) {
    if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
      !categories.is(e.target) && categories.has(e.target).length === 0
    ) {
      $('.menu').removeClass('menu--active');
      $('body').removeClass('lock');
    }
  });
  //------------burger-menu----------//

  $('.stock__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.stock-btn__prew'),
    nextArrow: $('.stock-btn__next'),
    dots: true,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 577,
        settings: {
          // centerMode: true,
          slidesToShow: 1,
        },
      }
    ]
  })

  $('.min-slider').slick({
    asNavFor: '.big-slider',
    focusOnSelect: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  })

  $('.big-slider').slick({
    asNavFor: '.min-slider',
    draggable: false,
    prevArrow: $('.big-slider-btn__prew'),
    nextArrow: $('.big-slider-btn__next'),

    fade: true
  })

  $(window).resize(function () {
    $('.big-slider').slick('setPosition');
    $('.min-slider').slick('setPosition');
  });


  $('.reviews__inner').slick({
    slidesToShow: 2,
    prevArrow: $('.reviews__btn-prew'),
    nextArrow: $('.reviews__btn-next'),
    dots: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }]
  })

  $('.documentation__inner').slick({
    slidesToShow: 4,
    prevArrow: $('.documentation__btn-prew'),
    nextArrow: $('.documentation__btn-next'),
    dots: true,
    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  })

  $('.about__inner').slick({
    slidesToShow: 4,
    prevArrow: $('.about__btn-prew'),
    nextArrow: $('.about__btn-next'),
    dots: true,
    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
       {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 577,
        settings: {
          // centerMode: true,
          slidesToShow: 1,
        },
      }
    ]
  })



  ////---------------------------------------////
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };


  $("#phone").click(function () {
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999");
  ////---------------------------------------////




})