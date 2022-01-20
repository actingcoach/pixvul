(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  $('input[type="checkbox"]').closest("label").css("cursor", "pointer");
  $('input[type="radio"]').closest("label").css("cursor", "pointer");
})(jQuery);

$(document).ready(function () {
  //countdown
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="time-count">%D <span class="title">days</span></div><div class="time-count">%H <span class="title">hour</span></div><div class="time-count">%M <span class="title">minute</span></div><div class="time-count">%S <span class="title">Second</span></div>'
        )
      );
    });
  });

  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);

  // exchange1data
  var exchange1data = [
    {
      text: "BTC",
      value: 1,
      selected: true,
      description: "Bitcoin",
      imageSrc: "./images/coin-icon1.png",
    },
    {
      text: "ETH",
      value: 1,
      selected: false,
      description: "Ethereum",
      imageSrc: "./images/coin-icon2.png",
    },
  ];
  $("#exchange-select1").ddslick({
    data: exchange1data,
    width: 300,
    imagePosition: "left",
    onSelected: function (data) {
      console.log(data);
    },
  });

  // exchange2data
  var exchange2data = [
    {
      text: "ETH",
      value: 1,
      selected: true,
      description: "Ethereum",
      imageSrc: "./images/coin-icon2.png",
    },
    {
      text: "BTC",
      value: 1,
      selected: false,
      description: "Bitcoin",
      imageSrc: "./images/coin-icon1.png",
    },
  ];
  $("#exchange-select2").ddslick({
    data: exchange2data,
    width: 300,
    imagePosition: "left",
    onSelected: function (data) {
      console.log(data);
    },
  });
});
