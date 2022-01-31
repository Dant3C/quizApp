$(document).ready(function(){

	for(let n = 1; n <= 5; n++)
	{
	
	$("#div"+n).click(function(){	
		$("#answer"+n).css("visibility","visible");
	});
	}
	$("#btn1").click(function(){
		if($("#test1").val() == 85){
			alert("correct");
		}else{
		alert("wrong, its 85");
		}

	});
	
});