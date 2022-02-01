$(document).ready(function(){
		let p = 1;
	for(let n = 1; n <= 4; n++)
	{
	
	$("#div"+n).click(function(){	
		$("#answer"+n).css("visibility","visible");
	});
	}
	$("#btn1").click(function(){

		if($("#test1").val() == 85){
			$("#ani").css("visibility","visible");
			var div = $("#ani");
			div.animate({left: '300px'}, "slow");
			div.animate({height:'400px'},"slow");
			div.animate({width:'1200'},"slow");
			div.animate({fontSize:'8em'},"slow");
			// alert("correct");
		}else if(p == 3){
		alert("wrong, its 85");
		}else{
			p = p +1;
			alert("wrong")
		}
		

	});
	$("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
	
});