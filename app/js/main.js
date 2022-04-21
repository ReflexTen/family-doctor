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
    prevArrow: $('.slide-arow--prew'),
    nextArrow: $('.slide-arow--next'),
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


})