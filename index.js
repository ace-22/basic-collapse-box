$(document).ready(function(){
$(".inside-1").hide();
$(".inside-2").hide();
$(".inside-3").hide();

$(".heading-1").click(function(){
$(".inside-1").toggle();	
})
$(".heading-2").click(function(){
$(".inside-2").toggle();	
})
$(".heading-3").click(function(){
$(".inside-3").toggle();	
})
$("button").hover(function(){
	$(this).addClass("headingoutline-1");})
$("button").mouseout(function(){
	$(this).removeClass("headingoutline-1");
})	


})