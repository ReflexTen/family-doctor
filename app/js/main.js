$(function () {
  //------------burger-menu----------//
  $('.burger').on('click', function () {
    $('.menu').toggleClass('menu--active')
    $('body').toggleClass('lock')
  })

  $('.menu__link').on('click', function () {
    $('.menu').removeClass('menu--active')
    $('body').removeClass('lock')
  })

  $('.menu__cross').on('click', function () {
    $('.menu').removeClass('menu--active')
    $('body').removeClass('lock')
  })
  //------------burger-menu----------//

  $('.menu a').on('click', function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate(
      {
        scrollTop: top,
      },
      1500
    )
  })

  $('.logo-box a').on('click', function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate(
      {
        scrollTop: top,
      },
      1500
    )
  })

  $('.button').on('click', function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate(
      {
        scrollTop: top,
      },
      1500
    )
  })

  let btnCategories = $('.burger')
  let categories = $('.menu')
  let popupContent = $('.popup')

  $(document).mouseup(function (e) {
    if (
      !btnCategories.is(e.target) &&
      btnCategories.has(e.target).length === 0 &&
      !categories.is(e.target) &&
      categories.has(e.target).length === 0 &&
      !popupContent.is(e.target) &&
      popupContent.has(e.target).length === 0
    ) {
      $('.menu').removeClass('menu--active')
      $('body').removeClass('lock')
    }
  })

  $('.stock__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.stock-btn__prew'),
    nextArrow: $('.stock-btn__next'),
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $('.min-slider').slick({
    asNavFor: '.big-slider',
    focusOnSelect: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    speed: 100,
  })

  $('.big-slider').slick({
    asNavFor: '.min-slider',
    draggable: false,
    prevArrow: $('.big-slider-btn__prew'),
    nextArrow: $('.big-slider-btn__next'),
    speed: 100,
    fade: true,
  })

  $(window).resize(function () {
    $('.stock__inner').slick('setPosition')
    $('.big-slider').slick('setPosition')
    $('.min-slider').slick('setPosition')
  })

  $('.reviews__inner').slick({
    slidesToShow: 2,
    prevArrow: $('.reviews__btn-prew'),
    nextArrow: $('.reviews__btn-next'),
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $('.documentation__inner').slick({
    slidesToShow: 4,
    prevArrow: $('.documentation__btn-prew'),
    nextArrow: $('.documentation__btn-next'),
    dots: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $('.about__inner').slick({
    slidesToShow: 4,
    prevArrow: $('.about__btn-prew'),
    nextArrow: $('.about__btn-next'),
    dots: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  ////-----------------mask----------------------////
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos)
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange()
      range.collapse(true)
      range.moveEnd('character', pos)
      range.moveStart('character', pos)
      range.select()
    }
  }

  $('#phone')
    .click(function () {
      $(this).setCursorPosition(3)
    })
    .mask('+7(999) 999-9999')
  ////-----------------mask----------------------////

  // $('.menu__cross').on('click', function () {
  //   $('.menu').removeClass('menu--active');
  //   $('body').removeClass('lock');
  // })

  ////--------------stop-vieo-------------------------////
  $('.popup__close').on('click', function () {
    $('.popup__content')
      .find('iframe')
      .attr('src', function (i, val) {
        return val
      })
  })

  $('.popup__body').on('click', function () {
    $('.popup__content')
      .find('iframe')
      .attr('src', function (i, val) {
        return val
      })
  })
  ////--------------stop-vieo-------------------------////

  $('.specialists__list').slick({
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    rows: 2,
    slidesPerRow: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 1,
          vertical: false,
          verticalSwiping: false,

          slidesPerRow: 1,
        },
      },
    ],
  })
})

////----------------popup-----------------------////
const popupLInks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 100 //анимация в css

if (popupLInks.length > 0) {
  for (let index = 0; index < popupLInks.length; index++) {
    const popupLInk = popupLInks[index]
    popupLInk.addEventListener('click', function (e) {
      const popupName = popupLInk.getAttribute('href').replace('#', '')
      const curentPopup = document.getElementById(popupName)
      popupOpen(curentPopup)
      e.preventDefault()
    })
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index]
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'))
      e.preventDefault()
    })
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open')
    if (popupActive) {
      popupClose(popupActive, false)
    } else {
      bodyLock()
    }
    curentPopup.classList.add('open')
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'))
      }
    })
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open')
    if (doUnlock) {
      bodyUnLock()
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index]
      el.style.paddingRight = lockPaddingValue
    }
  }
  body.style.paddingRight = lockPaddingValue
  body.classList.add('lock')

  unlock = false
  setTimeout(function () {
    unlock = true
  }, timeout)
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index]
        el.style.paddingRight = '0px'
      }
    }
    body.style.paddingRight = '0px'
    body.classList.remove('lock')
  }, timeout)

  unlock = false
  setTimeout(function () {
    unlock = true
  }, timeout)
}
////----------------popup-----------------------////
