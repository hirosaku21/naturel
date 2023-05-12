$(function () {
  // slick
  $(".slider").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
    arrows: false,//矢印なし
  });

  // ハンバーガーメニュー
  let $hamburger = $('.hamburger');
  let $gnav = $('.gnav');

  $hamburger.on('click', function () {
    $(this).toggleClass('active');
    $gnav.toggleClass('show');
    $('body').toggleClass('hamfix');
  });
});