$(document).ready(function(){
  $(".toggle-manu").click(function(){
      $("nav").slideToggle();
  });
});
$(window).scroll(function () { 
  if($(this).scrollTop() > 0){
    $("header").addClass("activ");
  }else{
    $("header").removeClass("activ");
  }
});
$(document).ready(function () {
    $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 0,
        center:true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    var owl = $('.owl-carousel-2');
owl.owlCarousel();
// Go to the next item
$('.nextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
  });
// count
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });
  
$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    // margin:10,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive:{
        600:{
            items:4
        }
    }
});

$(document).ready(function(){
    $("button").click(function(){
        // $(this).parent(".faqs-items").find(".faqs-content").slideDown();
        $(this).parent(".faqs-items").find(".faqs-content").slideToggle();
        $(this).parent(".faqs-items").prevAll(".faqs-items").find(".faqs-content").slideUp();
        $(this).parent(".faqs-items").nextAll(".faqs-items").find(".faqs-content").slideUp();

    });
});

$(document).ready(function(){
  $(".back-to-top").click(function (e) { 
    $("html").animate({"scrollTop":"0"});
    
  });
});
