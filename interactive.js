const navButton = document.getElementsByClassName("nav-button");
const section = document.getElementsByClassName("visible-content");
// interactive nav using jQuery
for (let index = 0; index < navButton.length; index++) {
  $(navButton[index]).on("click", () => {
    $("html, body").animate(
      {
        scrollTop: $(section[index]).offset().top - 100,
      },
      500
    );
  });
}
$(".button-lamar").on("click", () => {
  $("html, body").animate(
    {
      scrollTop: $(section[3]).offset().top - 100,
    },
    500
  );
});
$(window).on("scroll", () => {
  if ($(window).scrollTop() > $(section[0]).position().top && $(window).scrollTop() < $(section[0]).position().top + $(section[0]).outerHeight()) {
    $(navButton[0]).addClass("active-navbutton");
    $(navButton[1]).removeClass("active-navbutton");
    $(navButton[2]).removeClass("active-navbutton");
    $(navButton[3]).removeClass("active-navbutton");
  } else if ($(window).scrollTop() > $(section[0]).position().top + $(section[0]).outerHeight() && $(window).scrollTop() < $(section[1]).position().top + $(section[1]).outerHeight()) {
    $(navButton[0]).removeClass("active-navbutton");
    $(navButton[1]).addClass("active-navbutton");
    $(navButton[2]).removeClass("active-navbutton");
    $(navButton[3]).removeClass("active-navbutton");
  } else if ($(window).scrollTop() > $(section[1]).position().top + $(section[1]).outerHeight() && $(window).scrollTop() < $(section[2]).position().top + $(section[2]).outerHeight()) {
    $(navButton[0]).removeClass("active-navbutton");
    $(navButton[1]).removeClass("active-navbutton");
    $(navButton[2]).addClass("active-navbutton");
    $(navButton[3]).removeClass("active-navbutton");
  } else if ($(window).scrollTop() > $(section[2]).position().top + $(section[2]).outerHeight() && $(window).scrollTop() < $(section[3]).position().top + $(section[3]).outerHeight()) {
    $(navButton[0]).removeClass("active-navbutton");
    $(navButton[1]).removeClass("active-navbutton");
    $(navButton[2]).removeClass("active-navbutton");
    $(navButton[3]).addClass("active-navbutton");
  }
});

anime({
  targets: ".button-lamar ",
  translateY: 25,
  direction: "alternate",
  loop: true,
  easing: "linear",
});
