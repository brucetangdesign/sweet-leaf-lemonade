$( document ).ready(function() {
  var numBreakpoints = $(".slide-main").length;
  var sec1 = true;
  var sec2 = false;
  var sec3 = false;
  var sec4 = false;
  var $bg = $("#bg");
  var animation;
  var mobileSlideshowOn = false;

  airplane();
  checkScroll();

  //call the check when you scroll or resize
  $(window).on("resize scroll", function(){
    checkScroll();
  });

  function checkScroll(){
    resizeAirplane();

    if(window.innerWidth < 681){
      if(!mobileSlideshowOn){
        activateMobileSlideshow();
      }
      mobileSlideshowOn = true;
    }
    else{
      if(mobileSlideshowOn){
        killMobileSlideshow();
      }
      mobileSlideshowOn = false;
    }

    if($("body").isInView($(".center"))){
      if(!sec1){
        showSection(1);
        animation.play();
      }
    }

    if($("body").isInView($(".slide2 .center"))){
      if(!sec2){
        showSection(2);
        animation.pause();
      }
    }

    if($("body").isInView($(".slide3 .center"))){
      if(!sec3){
        showSection(3);
        animation.pause();
      }
    }

    if($("body").isInView($(".slide4 .center"))){
      if(!sec4){
        showSection(4);
        animation.pause();
      }
    }

  }

  function showSection(secNum){
    if(!$bg.hasClass("bg"+secNum)){
      $bg.removeClass();
      $bg.addClass("bg"+secNum);
    }

    $bg.children().each(function(index){
      if(!$(this).hasClass("bg-gradient"+secNum)){
        if(!$(this).hasClass("hidden")){
          $(this).addClass("hidden");
        }
      }
      else{
        if($(this).hasClass("hidden")){
          $(this).removeClass("hidden");
        }
      }
    });

    for(var i=0; i< numBreakpoints; i ++){
      eval("sec" + (i+1) + " = false");
    }
    eval("sec" + secNum + " = true");
  }

  var rellax = new Rellax('.rellax', {
    center: true
  });

  function airplane(){
    animation = bodymovin.loadAnimation({
      container: document.getElementById('airplane'), // Required
      path: 'airplane-data.json', // Required
      renderer: 'svg/canvas/html', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "Airplane", // Name for future reference. Optional.
    })
  }

  function resizeAirplane(){
    var $airplane = $("#airplane");
    var $airplaneContent = $airplane.find("> div");
    var airplaneDefaultW = 1742;
    var perc = 814/airplaneDefaultW;
    var newAirplaneSc = (window.innerWidth * perc)/airplaneDefaultW;
    if(window.innerWidth < 1742){
      if(window.innerWidth > 989){
        TweenMax.set($airplane,{scale:newAirplaneSc});
      }
      else{
        TweenMax.set($airplane,{scale:0.25});
      }
    }
    else{
      TweenMax.set($airplane,{scale:0.47});
    }
  }

  function activateMobileSlideshow(){
    var $mobileBottle = $(".mobile-bottle");
    var curBottle = 0;
    var numSlides = $mobileBottle.length - 1;
    var del= 0.8;

    playNextSlide();

    function playNextSlide(){
      if(curBottle == numSlides){
        curBottle = 0;
      }
      else{
        curBottle += 1;
      }

      $mobileBottle.each(function(index){
        if(index == curBottle){
          TweenMax.from($(this),1,{opacity: 0, y:20, delay: del, ease:Power3.easeOut,onComplete:playNextSlide});
          TweenMax.set($(this),{display:"block", delay: del});
        }
        else{
          if($(this).css("display")!="none"){
            TweenMax.set($(this),{display:"none", delay: del});
          }
        }
      });
    }
  }

  function killMobileSlideshow(){
    var $mobileBottle = $(".mobile-bottle");
    $mobileBottle.each(function(index){
      TweenMax.killTweensOf($(this));

      if(index != 0){
        TweenMax.set($(this),{display: "none"});
      }
      else{
        TweenMax.set($(this),{display: "block"});
      }
    });
  }
});
