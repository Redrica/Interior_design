'use strict';

(function () {
  var LABEL_UP = 'input-field__description--oninput';
  var FOCUS = 'input-field__input--focus';
  var ERROR = 'input-field__input--error';
  var labels = document.querySelectorAll('.input-field__description');
  var inputs = document.querySelectorAll('.input-field__input');

  // при фокусе на поле добавляет класс, "поднимающий" подпись, снимает состояние ошибки, если есть
  var onFocusChangeAppearance = function (input, label) {
    input.addEventListener('focus', function () {
      label.classList.add(LABEL_UP);

      if (this.classList.contains(ERROR)) {
        this.classList.remove(ERROR);
      }
    })
  };

  // при потере фокуса, если поле ввода осталось пустым, снимает "поднимающий класс",
  //
  var onBlurChangeAppearance = function (input, label) {
    input.addEventListener('blur', function () {
      if (input.value === '') {
        label.classList.remove(LABEL_UP);
      }
    });
  };

  for (var i = 0; i < inputs.length; i++) {
    onFocusChangeAppearance(inputs[i], labels[i]);
    onBlurChangeAppearance(inputs[i], labels[i]);
  }

  for (i = 0; i < inputs.length; i++) {

  }

})();
