'use strict';

(function () {
  // обрезка отображаемой строки в блоке анонса записи
  // в зависимости от установленного ограничения по знакам - limit
  // для заданных по макету параметров текста лучше не ставить больше 90,
  // иначе длинные слова могут занять более 4х строк,
  // при этом проходя по количеству знаков.

  var limit = 95;
  var textBlocks = document.querySelectorAll('.blog-card__text');

  for (var i = 0; i < textBlocks.length; i++) {
    var number = textBlocks[i].innerText.length;

    if (number > limit) {
      textBlocks[i].innerText = textBlocks[i].innerText.substring(0, limit) + ' …';
    }
  }
})();







