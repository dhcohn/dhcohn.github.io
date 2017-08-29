$(document).ready(function() {
    
    $('.melt').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 

    setTimeout(function(){
         window.location = goTo;
    },2000);       
});


 $("#change1").click(function() { 
   $('#change1').fadeOut(500, function () {
    $('#change1').attr("src", "img/light.jpg");
    $('#change1').fadeIn(500);
    }); 
  });

 $("#change2").click(function() { 
   $('#change2').fadeOut(500, function () {
    $('#change2').attr("src", "img/sound.jpg");
    $('#change2').fadeIn(500);
    }); 
  });

  $("#change3").click(function() { 
   $('#change3').fadeOut(500, function () {
    $('#change3').attr("src", "img/stain.jpg");
    $('#change3').fadeIn(500);
    }); 
  });

   $("#change4").click(function() { 
   $('#change4').fadeOut(500, function () {
    $('#change4').attr("src", "img/lightplussound.jpg");
    $('#change4').fadeIn(500);
    }); 
  });

$("#beginguy").animate({left: "-=30px"}, 500);
$("#beginguy").animate({left: "+=60px"}, 1000);
$("#beginguy").animate({left: "-=60px"}, 1000);
$("#beginguy").animate({left: "+=60px"}, 1000);
$("#beginguy").animate({left: "-=60px"}, 1000);
$("#beginguy").animate({left: "+=60px"}, 1000);
$("#beginguy").animate({left: "-=60px"}, 1000);
$("#beginguy").animate({left: "+=60px"}, 1000);
$("#beginguy").animate({left: "-=60px"}, 1000);
$("#beginguy").animate({left: "+=60px"}, 1000);
$("#beginguy").animate({left: "-=60px"}, 1000);
$("#beginguy").animate({left: "+=60px"}, 1000);
$("#beginguy").animate({left: "-=60px"}, 1000);
$("#beginguy").animate({left: "+=30px"}, 500);
});







function rollover2(ear)
    {

        ear.src = 'img/sound.jpg';

    }

    function mouseaway2(ear)
    {

        ear.src = "img/ear.jpg";

    }










function rollover(begin)
    {

        begin.src = 'img/animation.gif';

    }

function mouseaway(begin)
    {

        begin.src = "img/animation.jpg";

    }










function rollover3(text)
    {

        text.src = 'img/stain.jpg';

    }

function mouseaway3(text)
    {

        text.src = "img/text.jpg";

    }

function rollover4(eyeplusear)
    {

        eyeplusear.src = 'img/lightplussound.jpg';

    }

function mouseaway4(eyeplusear)
    {

        eyeplusear.src = "img/eyeplusear.jpg";

    }

function rollover5(nganimation)
    {

        nganimation.src = 'img/NGANIMATIONOnce.gif';

    }

function mouseaway5(nganimation)
    {

        nganimation.src = "img/NGANIMATION.jpg";

    }

function myMove() {
    var elem = document.getElementById("beginguy"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.left= pos + 'px'; 
        }
    }



}


