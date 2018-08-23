'use strict';

(function () {
  var MENU_CLASS = 'main-nav--opened';
  var BODY_NO_SCROLL = 'page--noscroll';
  var nav = document.querySelector('.main-nav');
  var menuToggle = nav.querySelector('.main-nav__toggle');
  var page = document.querySelector('.page');
  var mobileWidth = window.matchMedia('(max-width: 767px)');

  // смена класса блока навигации при нажатии на бургер
  // отмена скролла для контента страницы

  menuToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    nav.classList.toggle(MENU_CLASS);
    page.classList.toggle(BODY_NO_SCROLL);
  });

  var onTabletCloseMobileMenu = function () {
    nav.classList.remove(MENU_CLASS);
  };

  mobileWidth.addListener(onTabletCloseMobileMenu);

})();
