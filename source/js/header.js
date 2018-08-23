(function () {
  var SHADOW = 'header--scroll';
  var header = document.querySelector('.header');

  window.onscroll = function () {
    header.classList.add(SHADOW);

    if (window.pageYOffset === 0) {
      header.classList.remove(SHADOW);
    }
  }
})();
