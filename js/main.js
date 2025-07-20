$(function (){

  var  mixer = mixitup(' .blog__list')

  $('.blog__button').on('click', function (){
    $('.blog__button').removeClass('blog__button--active')
    $(this).addClass('blog__button--active')
  })

  $('.comments__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.comments__dots'),
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:
    [
      {
        breakpoint:700 ,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
      },
    ]
  })
  $('.comments__prev').on('click', function(e) {
    e.preventDefault ()
    $('.comments__slider').slick('slickPrev')
  })
  $('.comments__next').on('click', function (e) {
    e.preventDefault ()
    $('.comments__slider').slick('slickNext')
  })

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__acc-link--active')
    $(this).children('.questions__acc-text') .slideToggle()
  })

  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
})
