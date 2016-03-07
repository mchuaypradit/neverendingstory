$(document).ready(function(){
        $('.container').addClass("hidden");

        $('.container').click(function() {
            var $this = $(this);

            if ($this.hasClass("hidden")) {
                $(this).removeClass("hidden").addClass("visible");

            } else {
                $(this).removeClass("visible").addClass("hidden");
            }
        });
    });

$(function() {
  $('#slides').superslides({
    hashchange: true
  });
});

// $(document).ready(function() {
 
//   $(".owl-carousel").owlCarousel({
 
//       navigation : false, // Show next and prev buttons
//       slideSpeed : 200,
//       paginationSpeed : 400,
//       singleItem: true
 
//       // "singleItem:true" is a shortcut for:
//       // items : 1, 
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
 
//   });
 
// });
