$(document).ready(function(){
	$("#answer1").hide();
	$("#answer2").hide();
	$("#div1").click(function(){
		$("#answer1").toggle();		
	});
	$("#btn1").click(function(){
		if($("#test1").val() == 1){
			alert("correct");
		}else{
		alert("wrong");
		}

	});
	
});