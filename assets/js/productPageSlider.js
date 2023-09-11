$(document).ready(function () {
  // Product Page slider
  $(".productPage_sliderBigImages").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".productPage_sliderThumbImages",
  });
  $(".productPage_sliderThumbImages").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".productPage_sliderBigImages",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 3,
        },
      },
    ],
  });
});
