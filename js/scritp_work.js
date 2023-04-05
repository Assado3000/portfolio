//fullpage.js
$(document).ready(function () {
  var slideIndexS = 0,
    sliding = false;

  $("#fullpage").fullpage({
    sectionsColor: ["#0798ec", "#4BBFC3", "#7BAABE"],
    menu: "#menu",
    controlArrows: true,
    controlArrowsHTML: [
      '<div class="my-arrow"><i class="bx bxs-chevron-left bx-tada"></i></div>',
      '<div class="my-arrow"><i class="bx bxs-chevron-right bx-tada"></i></div>',
    ],
    slidesNavigation: true,
    scrollHorizontally: true,
    dragAndMove: true,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["Featured", "Concepts", "Other"],
    loopTop: true,
    loopBottom: true,

    afterSlideLoad: function (section, origin, destination, direction) {
      slideIndexS = destination.index + 1;
    },
    onLeave: function (origin, destination, direction) {
      //console.log('Index: ' + origin.index + ' Slide Index: ' + slideIndexS);
      //console.log(index, nextIndex, direction, sliding);
      if (origin.index === 2 && !sliding) {
        if (direction === "down" && slideIndexS < 5) {
          $.fn.fullpage.moveSlideRight();
          return false;
        } else if (direction === "up" && slideIndexS > 1) {
          $.fn.fullpage.moveSlideLeft();
          return false;
        }
      } else if (sliding) {
        return false;
      }
    },
  });
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("#menu");
  
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("clicked");
      navMenu.classList.toggle("clicked");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach(n => n.addEventListener("click", closeMenu));
  
  function closeMenu() {
      hamburger.classList.remove("clicked");
      navMenu.classList.remove("clicked");
  }
});
