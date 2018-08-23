"use strict";

(function() {
  var overlay = document.querySelector(".overlay");
  var page = document.querySelector(".page");
  var search = document.querySelector("#site_search");
  var modal = document.querySelector(".modal-search__list");
  var modalSearch = document.querySelector(".modal-search");
  var closeSearchButton = document.querySelector(".modal-search__close");
  var openSearchButton = document.querySelector(".panel__button--search");

  var showOverlay = function() {
    overlay.classList.add("overlay--show");
    page.classList.add("page--modal");
  };

  var hideOverlay = function() {
    overlay.classList.remove("overlay--show");
    page.classList.remove("page--modal");
  };

  var onSearchButtonClick = function(evt) {
    evt.preventDefault();
    modalSearch.classList.remove("modal-search__hidden");
    search.classList.remove("modal-search__hidden");
    showOverlay();
    // search.focus(); // Активировать для автоматической установки курсора в поле ввода
  };

  var onCloseButtonClick = function(evt) {
    evt.preventDefault();
    search.value = "";
    hideSearchList();
    search.focus();
  };

  var onInputChange = function() {
    modal.classList.remove("modal-search__hidden");
    modalSearch.classList.add("modal-search__field--active");
    search.classList.add("modal-search__field--active");
    closeSearchButton.style.display = "block";
    hideSearchList();
  };

  var hideSearchList = function() {
    if (search.value === "") {
       modal.classList.add("modal-search__hidden");
      search.classList.remove("modal-search__field--active");
      closeSearchButton.style.display = "none";
    }
  };

  var onEscPressButton = function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      search.classList.add("modal-search__hidden");
      modalSearch.classList.add("modal-search__hidden");
      search.value = "";
      hideOverlay();
      hideSearchList();
    }
  };

  var addSearchModalHandlers = function() {
    openSearchButton.addEventListener("click", onSearchButtonClick);
    closeSearchButton.addEventListener("click", onCloseButtonClick);
    search.addEventListener("input", onInputChange);
    window.addEventListener("keydown", onEscPressButton);
  };

  addSearchModalHandlers();

  var searchHandler = function(e) {
  window.addEventListener("mouseup", function(evt) {
    var target = evt.target;

    if (target.closest(".modal-search__form") === null) {
      evt.preventDefault();
      modalSearch.classList.add("modal-search__hidden");
      search.value = "";
      hideOverlay();
      hideSearchList();
    }
  });
}

  openSearchButton.addEventListener("click", searchHandler);


})();
