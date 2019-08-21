
$(document).ready(function(){
 
/*
Comandos que fazem os elemntos que fazem ter animação de subir e descer
*/

 // $("#flip").click(function(){
  //  $("#panel").slideDown("fast");
 // });

//$("#flip2").click(function(){
//    $("#panel").slideUp("1000");
 // });

/*
animação que faz as duas animações anteriores
*/
$("#Menu").click(function(){
    $("#Principal").slideToggle("slow");
  });


/////////////////FadeOut//////////////

	//  $("#b1").click(function(){
	   // $("#div1").fadeOut();
	   // $("#div2").fadeOut("slow");
	   // $("#div3").fadeOut(3000);
	//  });

	 // $("#b2").click(function(){
	  //  $("#div1").fadeIn();
	   // $("#div2").fadeIn("slow");
	  //  $("#div3").fadeIn(3000);
	 // });



///////////Append////////////
// $("#btn1").click(function(){
   // $("p").remove(" <b>Appended text</b>.");
 // });

  //$("#btn2").click(function(){
   // $("ol").remove("<li>Appended item</li>");
 //});





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



  });