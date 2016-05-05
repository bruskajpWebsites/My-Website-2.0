"use strict";

var main = function () {
  var click = false;
  var justClicked = false;
  var hover = false;
  var subhover = false;

  $('.dropdown-toggle').click(function () {
    if (($(this).next()).is(":visible") && !hover) {
      $(this).next().hide();
      click = false
      justClicked = true;
    } else if (($(this).next()).is(":visible") && hover) {
      click = true;
      hover = false;
    } else {
      $(this).next().show();
      click = true;
    }
  });

  $('.dropdown-toggle').hover(function () {
    if (!click) {
      if (($(this).next()).is(":visible")) {
        var temp = this;
        setTimeout(function (thing) {
          if (!subhover) {
            $(temp).next().hide();
          }
        }, 100);
        hover = false;
      } else {
        if (!justClicked) {
          $(this).next().show();
          hover = true;
        } else {
          justClicked = false;
        }
      }
    }
  });

  $('.dropdown-menu').hover(function () {
    if (!click) {
      if (($(this)).is(":visible")) {
        var temp = this;
        setTimeout(function () {
          if (!subhover) {
            $(temp).hide();
          }
          subhover = false;
        }, 100);
      } else {
        $(this).show();
        subhover = true;
      }
    }
  });

  $('.dropdown-menu').click(function () {
    // check if this referes to the menu or the link (assumes link)
    $(this)
  });
}

$(document).ready(main);
