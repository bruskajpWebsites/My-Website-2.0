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

  });

  $('.seeMore').click(function () {
    var seeMoreText = $(this).parent().children('.seeMoreText');
    if (seeMoreText.is(":visible")) {
      //$(this).parent().children('.seeMoreText').hide();
      seeMoreText.hide();
      $(this).text("See More");
    } else {
      //$(this).parent().children('.seeMoreText').show();
      seeMoreText.show();
      $(this).text("See Less");
    }
  });

  $('.submit').click(function () {
    var name = $('.name').val();
    var email = $('.email').val();
    var message = $('.message').val();
    $('.name').val('');
    $('.email').val('');
    $('.message').val('');
    $('.counter').text('280');
    $('.submit').addClass('disabled');
  });

  var checkToSend = function () {
    var nameLength = $('.name').val().length;
    var emailLength = $('.email').val().length;
    var messageLength = $('.message').val().length;
    var charactersLeft = 280 - messageLength;
    $('.counter').text(charactersLeft);
    if (nameLength > 0 && emailLength > 0) {
      if (charactersLeft < 0) {
        $('.submit').addClass('disabled');
      } else if (charactersLeft === 280) {
        $('.submit').addClass('disabled');
      } else {
        $('.submit').removeClass('disabled');
      }
    }
  }

  $('.name').keyup(checkToSend);
  $('.email').keyup(checkToSend);
  $('.message').keyup(checkToSend);

  $('.submit').addClass('disabled');
}


$(document).ready(main);
