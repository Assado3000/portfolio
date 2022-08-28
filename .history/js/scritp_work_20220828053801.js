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
        if (direction === "down" && slideIndexS < 3) {
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
});
