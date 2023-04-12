$(document).ready(function () {
  $(".menu li").hover(
    function () {
      $(this).find(".sub li").stop().slideDown();
    },
    function () {
      $(this).find(".sub li").stop().slideUp();
    }
  );

  var i = 3;
  setInterval(function () {
    if (i == 3) $(".slide img").css({ display: "block" });
    $(".slide img").eq(--i).fadeOut();
    if (i == 0) i = 3;
  }, 2000);
  $(".hga").click(function () {
    $(".no").css({ display: "none" });
    $(".ga").css({ display: "block" });
    $(".hga").css({ "background-color": "#fff" });
    $(".hna").css({ "background-color": "#ccc" });
  });
  $(".hno").click(function () {
    $(".ga").css({ display: "none" });
    $(".no").css({ display: "block" });
    $(".hga").css({ "background-color": "#ccc" });
    $(".hna").css({ "background-color": "#fff " });
  });
  $(".popup button").click(function () {
    $(".popup_bg").css({ display: "none" });
  });
  $(".no a")
    .eq(0)
    .click(function () {
      $(".popup_bg").css({ display: "block" });
    });
});
