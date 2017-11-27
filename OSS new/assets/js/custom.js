$(document).ready(function () {
   // $banner_height = $('.logo').height();
   //  $('.about').css('margin-top',$banner_height);
});

$(document).ready(function () {
   $("#show-more,#more_members").click(function () {
       $data = $(this).text();

       if($data == 'Show More'){
           $(this).text("Show Less");
       }
       else{
           $(this).text("Show More");
       }
   });
});

$(document).ready(function () {
    // $('main').hide();
    // setTimeout(function () {
    //     $(".preloading-screen").fadeOut(700);
    // },3000);

    // setTimeout(function () {
    //     $(".main-menu").fadeIn(800).css('display','flex');
    //     $(".ossrd").fadeIn(800);
    // },1300);
    // setTimeout(function () {
    //     $("main").fadeIn(800);
    //
    // },2300);

});

// smooth scroll
$(document).ready(function(){
   // Add smooth scrolling to all links
   $(".scroll").on('click', function(event) {

       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
           // Prevent default anchor click behavior
           // event.preventDefault();

           // Store hash
           var hash = this.hash;

           // Using jQuery's animate() method to add smooth page scroll
           // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 800, function(){

               // Add hash (#) to URL when done scrolling (default click behavior)
               window.location.hash = hash;
           });
       } // End if
   });
});

//// <scroll-top>
$(document).ready(function(){

   $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
           $('.scrollup').fadeIn();
       } else {
           $('.scrollup').fadeOut();
       }
   });

   $('.scrollup').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 600);
       return false;
   });

});

//// </scroll-top>

$(document).ready(function () {
   $("").mouseenter(function () {
      $(this).css('opacity','1');
   }).mouseleave(function () {
       $(this).css('opacity','0');
   });
});