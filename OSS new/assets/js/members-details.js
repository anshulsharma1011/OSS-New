$(document).ready(function () {
   $('.alumini, .navigation-bar').hide();
   // $('.flex-image').css('width',$(window).width());
});

$(document).ready(function () {
   $('.nishank, .nishant, .puneet, .aman, .prashant-kumar, .nikhil-katiyar, .nikhil-kumar, .kshitij, .rajat, .prashant-verma, .abhinav, .harshit').click(function () {
       $photo_id = ($(this).attr("id"));

       $detail_id = $photo_id.substr(0,$photo_id.length-1);

       $(".alumini-content").hide();
       $("#"+$detail_id+', .navigation-bar').show();
   });

   $(".close").click(function () {
       $(".alumini-content").show();
       $(".alumini, .navigation-bar").hide();
   });
});
