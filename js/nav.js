$( document ).ready(function() {
  var scrolled = false;
  var $header = $("header");

  //check page scroll on page load (will show mobile nav if necessary)
  checkScroll();

  //check the scroll - display mobile nav if necessary
  $(window).on("resize scroll", function(){
    checkScroll();
  });

  //Display the mobile nav if user has scrolled on a small screen (< 768px)
  function checkScroll(){
    //if($(window).width() < 768){
      if($(window).scrollTop() > 20){
        if(!scrolled){
          console.log("dd");
          $header.addClass("scrolled");
          scrolled = true;
        }
      }
      else{
        if(scrolled){
          $header.removeClass("scrolled");
          scrolled = false;
        }
      }
    /*}
    else{
      scrolled = false;
      if($("header").hasClass("scrolled")){
        $("header").removeClass("scrolled");
      }
    }*/
  }
});
