'use strict';

/* 読み込み時にタイトルをフェードイン */
$(document).ready(function() {
  $('.title').css('animation-name', 'fadeIn');
  $('.title').css('opacity', '1');
});

/* ポジション情報を取得 */
var scroll;
var winH = $(window).height();
var profileTop = $('.profile').offset().top;
var objHeight = $('.profile').outerHeight();
var profilePosition = profileTop + objHeight / 2;
var worksTop = $('.works').offset().top;
var objHeight = $('.works').outerHeight();
var worksPosition = worksTop + objHeight / 2;

$(window).on('scroll', function() {
  scroll = $(window).scrollTop();
  /* プロフィールが画面に表示されたら */
  if (scroll >= profilePosition - winH) {
    $('.profile').css('animation-name', 'fadeIn');
    $('.profile').css('opacity', '1');
  }
  /* Worksが画面に表示されたら */
  if (scroll >= worksPosition - winH) {
    $('.works').css('animation-name', 'fadeIn');
    $('.works').css('opacity', '1');
  }
});
