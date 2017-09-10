$(function ()
{
  'use strict';

  $(window).on("scroll", function ( )
  {
    window.console.log($(".navbar").height());
    window.console.log($(window).scrollTop());

    var navbar = $(".navbar");
    if ($(window).scrollTop() >= navbar.height())
    {
      if (!$('#nav').hasClass('scrolled'))
      {
        navbar.addClass('scrolled');
      }
    }
    else
    {
      navbar.removeClass('scrolled');
    }

  });


});
