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
    //responsiveWidth: 700,
    dragAndMove: true,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: [
      "About",
      "Portfolio",
      "Services",
      "Curriculum",
      "Contact",
    ],
    loopTop: true,
    loopBottom: true,

    afterSlideLoad: function (section, origin, destination, direction) {
      slideIndexS = destination.index + 1;
    },
    onLeave: function (origin, destination, direction) {
      //console.log('Index: ' + origin.index + ' Slide Index: ' + slideIndexS);
      //console.log(index, nextIndex, direction, sliding);
      if (origin.index === 1 || (origin.index === 3 && !sliding)) {
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

    scrollOverflow: true,
    onScrollOverflow: function (section, slide, position, direction) {
      var params = {
        section: section,
        slide: slide,
        position: position,
        direction: direction,
      };
    },
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", mobileMenu);
  
  function mobileMenu() {
      hamburger.classList.toggle("clicked");
      navMenu.classList.toggle("clicked");
  }

});

$(document).ready(function () {
  // array with texts to type in typewriter
  let dataText = ["Web Developer.", "Web Designer.", "Freelancer."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("#job").innerHTML =
        text.substring(0, i + 1) +
        '<span class="type" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 1000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
