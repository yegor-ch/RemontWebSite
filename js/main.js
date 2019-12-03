$(document).ready(function() {
  $(".compleated-w-slider").owlCarousel({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    nav: true,
    navText: [
      '<img src="/img/left.png" alt="left">',
      '<img src="img/right.png" alt="right">'
    ],
    margin: 100,
    dots: false,
    smartSpeed: 1,
    onInitialized: resizeBtn,
    onTranslated: resizeBtn,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Light gallery setup.

  $("#dynamic").on("click", function() {
    console.log("GALLERY");
    $(this).lightGallery({
      dynamic: true,
      nextHtml: '<img src="/img/right.png" alt="right">',
      prevHtml: '<img src="/img/left.png" alt="left">',
      dynamicEl: [
        {
          src: "./img/slider1.jpg",
          subHtml:
            "<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>"
        },
        {
          src: "./img/slider2.jpg",
          subHtml:
            "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
        },
        {
          src: "./img/slider1.jpg",
          subHtml: "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
        }
      ]
    });
  });

  function resizeBtn() {
    if ($(".compleated-w-slider .item").css("flex-wrap") != "wrap-reverse") {
      $(".compleated-w-slider .active > .item").removeClass("d-flex");
      //$('.compleated-w-slider .active > .item .slider-desc').width('55%');
      var text_height = $(".active > .item .slider-desc").height();
      console.log(text_height);
      //$('.compleated-w-slider .active > .item .slider-desc').width('auto');
      $(".compleated-w-slider .active > .item").addClass("d-flex");

      $(".compleated-w__btn").css("top", text_height + 40);
    }
  }

  $(".compleated-w__btn").click(function() {
    $(".slider-desc").toggleClass("slider-desc__off");
  });

  $(".services-slider").owlCarousel({
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    navText: [
      '<img src="/img/left.png" alt="left">',
      '<img src="img/right.png" alt="right">'
    ],
    dots: false,
    animateIn: "slideInUp",
    items: 1
  });

  // Setting service-slider__desc width.
  var stageOuterWidth = $(".services-slider .owl-stage-outer").width();
  console.log("Stage: " + stageOuterWidth);
  $(".services-slider__desc").width(stageOuterWidth);
  console.log("Desc: " + $(".services-slider__desc").width());

  // Hide menu after click on menu item.
  $(".nav-link").click(function() {
    $(".navbar-collapse").removeClass("show");
  });

  // Smooth scrolling.

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen

          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(".footer-contacts__vb").attr("href", "viber://add?number=380976125370");
    console.log($(".footer-contacts__vb").attr("href"));
  } else {
    $(".footer-contacts__vb").attr("href", "viber://chat?number=+380976125370");
    console.log($(".footer-contacts__vb").attr("href"));
  }
});
