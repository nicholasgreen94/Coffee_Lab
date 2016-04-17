
$(function() {
  
  $(".menu-btn").on("click", function() {
    $(".navbar-nav")
    .addClass("text-right")
    .css(
      "display","inline-block"
    )
    .children().css(
      "display", "inline-block"
    )
    .children('a').css({
      "margin": "0",
      "padding": "7.5px 10px"
    });
    
  $(window).resize(function() {
    if ($(window).width() > 580) {
      $(".navbar-nav").css(
        "margin", "14px 28px 0 0"
      );
    }
  });
    
    $(window).resize(function() {
    if ($(window).width() > 782) {
      $(".navbar-nav").css(
        "margin", "0"
      )
      .children().children('a').css(
        "padding", "20px 15px"
      );
      $(".navbar-default").css(
        "border-bottom", "1px solid #000"
      );
    } else {
      $(".navbar-nav").children().children('a').css(
        "padding", "7.5px 10px"
      );
      $(".navbar-default").css(
        "border-bottom", "none"
      );
    }
  })
    
    $(".navbar-default").css(
      "border-bottom", "none"
    );
  });
});
