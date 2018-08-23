"use strict";

(function() {
  var search = document.querySelector("#site_search");
  var modal = document.querySelector(".modal-search__list");
  var modalSearch = document.querySelector(".modal-search");
  var closeSearchButton = document.querySelector(".modal-search__close");

  var chip = document.querySelector(".filter__button");

  chip.addEventListener("click", function(evt) {
    evt.preventDefault();
    evt.currentTarget.classList.toggle("chip--active");
  });

  var onCloseButtonClick = function(evt) {
    evt.preventDefault();
    search.value = "";
    hideSearchList();
    search.focus();
  };

  var onEscPressButton = function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      search.value = "";
      hideSearchList();
    }
  };

  var hideSearchList = function() {
    if (search.value === "") {
      modal.classList.add("modal-search__hidden");
      search.classList.remove("modal-search__field--active");
      closeSearchButton.style.display = "none";
    }
  };

  var onInputChange = function() {
    modal.classList.remove("modal-search__hidden");
    modalSearch.classList.add("modal-search__field--active");
    search.classList.add("modal-search__field--active");
    closeSearchButton.style.display = "block";
    closeSearchButton.addEventListener("click", onCloseButtonClick);
    hideSearchList();
  };

  search.addEventListener("input", onInputChange);
})();
