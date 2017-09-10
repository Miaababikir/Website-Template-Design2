$(document).ready(function ( )
{
    // Nice Scroll
    $("html").niceScroll();

    $('carousel').carousel({
      interval: 1000
    });

    // Show Color Option Div When Click On The Gear
    $('.gear-check').click(function ( )
    {
      $('.color-option').fadeToggle();
    });

    // Change Theme Color On click
    var colorLi = $('.color-option ul li');

    colorLi
      .eq(0).css('backgroundColor', '#e41b17').end()
      .eq(1).css('backgroundColor', '#9c27b0').end()
      .eq(2).css('backgroundColor', '#2196f3').end()
      .eq(3).css('backgroundColor', '#ffeb3b');

    colorLi.click(function ( )
    {
      $("link[href*='theme']").attr("href", $(this).attr("data-value"));
      console.log($(this).attr("data-value"));
    });

    // Scroll Button
    var scrollBotton = $('#scroll-top');

    $(window).on("scroll", function ( )
    {
      console.log($(this).scrollTop());

      $(this).scrollTop() >= 700? scrollBotton.show():scrollBotton.hide();

    });

    // Click On Button To Scrollup
    scrollBotton.click(function ( )
    {
      $('html,body').animate({scrollTop: 0}, 600);
    });



});

// Loading Screen
$( window ).on('load', function()
{
  $(".loading-overlay .spinner").fadeOut(1000, function()
  {
    $('body').css('overflow', 'auto');
    $(this).parent().fadeOut(1000,function()
    {
      $(this).remove();
    });
  });
});
