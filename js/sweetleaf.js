$( document ).ready(function() {
  var numBreakpoints = $(".slide-main").length;
  var sec1 = true;
  var sec2 = false;
  var sec3 = false;
  var sec4 = false;
  var $bg = $("#bg");

  checkScroll();

  //call the check when you scroll or resize
  $(window).on("resize scroll", function(){
    checkScroll();
  });

  function checkScroll(){
    if($("body").isInView($(".center"))){
      if(!sec1){
        showSection(1);
      }
    }

    if($("body").isInView($(".slide2 .center"))){
      if(!sec2){
        showSection(2);
      }
    }

    if($("body").isInView($(".slide3 .center"))){
      if(!sec3){
        showSection(3);
      }
    }

    if($("body").isInView($(".slide4 .center"))){
      if(!sec4){
        showSection(4);
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
});
