"use strict";

(function() {
  window.onload = function(e) {
    var filter = document.querySelector(".filter");
    var filterButton = document.querySelector(".panel__button--filter");
    var chip = document.querySelectorAll(".filter__button");
    var chipsButton = Array.from(chip);
    var overlayGlass = document.querySelector(".overlay");

    var showOverlayGlass = function() {
      overlayGlass.classList.add("overlay--glass");
    };

    var hideOverlayGlass = function() {
      overlayGlass.classList.remove("overlay--glass");
    };

    var isActiveChip = function(item) {
      return item.classList.contains("chip--active");
    };

    var activateFilterButton = function() {
      if (chipsButton.some(isActiveChip)) {
        filterButton.classList.add("panel__button--filter-active");
      } else {
        filterButton.classList.remove("panel__button--filter-active");
      }
    };

    var activateChip = function() {
      for (var i = 0; i < chip.length; i++) {
        chip[i].addEventListener("click", function(evt) {
          evt.preventDefault();
          evt.currentTarget.classList.toggle("chip--active");
        });
      }
    };

    var filterHandler = function(e) {
      e.preventDefault();
      filter.classList.toggle("filter--active");
      showOverlayGlass();

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (filter.classList.contains("filter--active")) {
            filter.classList.remove("filter--active");
          }
        }
      });

      window.addEventListener("mouseup", function(evt) {
        var target = evt.target;

        if (target.closest(".filter") === null) {
          evt.preventDefault();
          if (filter.classList.contains("filter--active")) {
            filter.classList.remove("filter--active");
          }
          hideOverlayGlass();
          activateFilterButton();
        }
      });
    };

    var initPage = function() {
      activateChip();
      activateFilterButton();
      filterButton.addEventListener("click", filterHandler);
    };

    initPage();
  };
})();
