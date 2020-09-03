// $(document).ready(function(){ 
//   $("#myTab a").click(function(e){
//     e.preventDefault();
//     $(this).tab('show');
//   });
// });
// $('select').selectric();

$(document).ready(function(){
   jQuery(function($){
	   $(".jumbo__tel").mask("+7 (999) 999-99-99");
   });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    // adaptiveHeight: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 3,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 2
          }
        },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]     
  });
  $('.works__slider').slick({
    // dots: true,
    // infinite: true,
    // speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

});


// $('.works__slider').slick({
//   adaptiveHeight: true
// });


// $('.works__slider').slick({
//   dots: true,
//   infinite: true,
//   // speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true
// });








// var v;
// $(document).ready(function() {
//     v = new Vivus('svg1', {type: 'oneByOne', duration: 185, start: 'manual'});
//     v.reset();
//     console.log("Reset");

// });

// var vv;
// var gggg;
// var p1;
//     gggg = document.querySelector('#svg1 path');
//     p1 = gggg;
//     vv = new Vivus('#svg1 path', {type: 'oneByOne', duration: 185, start: 'manual'});
//     vv.reset();
//     console.log("Reset");


    // var people1 = new Vivus(p1, {
    //     type: 'async',
    //     duration: 450,
    //     pathTimingFunction: Vivus.LINEAR,
    //     animTimingFunction: Vivus.LINEAR,
    //     file: 'img/logo-w.svg',
    //     start: 'manual'
    // });



//   window.onload = function () {
//   var svg = new Walkway({
//     selector: '#svg1',
//     easing: 'easeInOutCubic',
//     duration: 2100
//   }).draw();
// };

  $(document).ready(function(){
    $("nav").sticky({topSpacing:0});
  });
  $(document).ready(function(){
    $(".scroll-btn").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1200);
        e.preventDefault();
        return false;
    });
});
   
		// $(document).ready(function(){
		// 	$("#header").sticky({topSpacing:0});
		// 	$("#buttons").sticky({topSpacing:70});
		// 	$("#authorinfo").sticky({topSpacing:160});
		// });
	

  // $(".pag-fix__point").click(function(e) {
  //   e.preventDefault();

  //   $(this).prevAll("a").addClass("orng");
  //   $(this).addClass("orng");
  //   $(this).nextAll("a").removeClass("orng");
  // });


  $(".pag-fix__point").click(function() {

    $(this).prevAll("a").addClass("orng");
    $(this).addClass("orng");
    $(this).nextAll("a").removeClass("orng");

        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1800);
        // e.preventDefault();
        return false;    
  });




  //<---- Remenber to get all external js at the gear on top

// var elem = $('#container');
// var knobResize = function () {
//   // var width = Math.floor((elem.width() - 674) / 4);
//     // var width = Math.floor((elem.width() - 674) / 4);
//       var width = 124;
      
//   elem.find('.knob').trigger('configure', { width: width, height: width });
// };



var elem = $('#container');
var knobResize = function () {

  var width = 124;
  
  // if ($(window).width() <= 900) {
  //   width = 100;
  // } 

  if($(window).width() <=767 ) {
    width = 100;
  }

  if($(window).width() <=470 ) {
    width = 80;
  }

  if($(window).width() <=375 ) {
    width = 76;
  }

  if($(window).width() <=330 ) {
    width = 66;
  }  

  console.log("Width: " + width);
  elem.find('.knob').trigger('configure', { width: width, height: width });
};



$(function(){
  $(window).resize(function () {
    knobResize();
  });
});


var myDate = new Date(2017, 6, 12,11,0,0);
// месяцы с нуля

elem.find('#knob-countdown').countdown({
  until: myDate,
  format: 'DHMS',
  onTick: function (e) {

    var secs = e[6], mins = e[5], hr = e[4], ds = e[3];
    elem.find("#countdown-ds").val(ds).trigger("change");
    elem.find("#countdown-hr").val(hr).trigger("change");
    elem.find("#countdown-min").val(mins).trigger("change");
    elem.find("#countdown-sec").val(secs).trigger("change");
  }
});

$('.knob').knob();
knobResize();

$(function(){

  $(window).on('scroll', function(event){
     var scroll_poz = $(window)[0].scrollY;

     if(scroll_poz >= $('#screen-1')[0].offsetTop) {
        $('[href="#screen-1"]').addClass("orng");
        $('[href="#screen-1"]').prevAll("a").addClass("orng");
     } else {
       $('[href="#screen-1"]').removeClass("orng");
        $('[href="#screen-1"]').nextAll("a").removeClass("orng");
     }


     if(scroll_poz >= $('#screen-2')[0].offsetTop-1) {
        $('[href="#screen-1"]').addClass("orng");
        $('[href="#screen-2"]').addClass("orng");
        $('[href="#screen-2"]').prevAll("a").addClass("orng");
     } else {
       $('[href="#screen-2"]').removeClass("orng");
        $('[href="#screen-2"]').nextAll("a").removeClass("orng");
     }

     if(scroll_poz >= $('#screen-3')[0].offsetTop-1) {
        $('[href="#screen-1"]').addClass("orng");
        $('[href="#screen-2"]').addClass("orng");
        $('[href="#screen-3"]').addClass("orng");
        $('[href="#screen-3"]').addClass("orng");
        $('[href="#screen-3"]').prevAll("a").addClass("orng");
     } else {
       $('[href="#screen-3"]').removeClass("orng");
        $('[href="#screen-3"]').nextAll("a").removeClass("orng");
     }

     if(scroll_poz >= $('#screen-4')[0].offsetTop-1) {
        $('[href="#screen-1"]').addClass("orng");
        $('[href="#screen-2"]').addClass("orng");
        $('[href="#screen-3"]').addClass("orng");
        $('[href="#screen-4"]').addClass("orng");
        $('[href="#screen-4"]').prevAll("a").addClass("orng");
     } else {
       $('[href="#screen-4"]').removeClass("orng");
        $('[href="#screen-4"]').nextAll("a").removeClass("orng");        
     }

     if(scroll_poz >= $('#screen-5')[0].offsetTop-1) {
        $('[href="#screen-1"]').addClass("orng");
        $('[href="#screen-2"]').addClass("orng");
        $('[href="#screen-3"]').addClass("orng");
        $('[href="#screen-4"]').addClass("orng");
        $('[href="#screen-5"]').addClass("orng");
        $('[href="#screen-5"]').prevAll("a").addClass("orng");
     } else {
       $('[href="#screen-5"]').removeClass("orng");
        $('[href="#screen-5"]').nextAll("a").removeClass("orng");
     }     
  });

});