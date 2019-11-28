window.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.sample01 .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true
  });
}, false);

$('.menu-trigger').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click', function () {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
  }
});


$(function(){
  $('header a').click(function () {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    }, 500);
  });
});


    jQuery(window).on("scroll", function($) {
  if(jQuery(this).scrollTop() > 100) {
      jQuery('.floating').show();
  } else {
      jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
      jQuery('body,html').animate({
        scrollTop: 0
      }, 500);
    return false;
  });


$('.under').click(function () {
  $('#pbp-modal').fadeIn();
});
$('.close-modal').click(function () {
  $('#pbp-modal').fadeOut();
});





$('header a').click(function () {
  $('header a').css('border-bottom', 'none');
  $(this).css('border-bottom', '3px solid #E81919');
});

// FAQのアコーディオン
$('.faq-list-item').click(function () {
  var $answer = $(this).find('.answer');
  if ($answer.hasClass('open')) {
    $answer.removeClass('open');
    $answer.slideUp();


    $(this).find('span').text('+');

  } else {
    $answer.addClass('open');

    $answer.slideDown();

    $(this).find('span').text('-')

  }
});
