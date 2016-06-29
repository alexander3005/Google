
var main =function(){

	$("#tip-first").hover(function(){
		$(".tip-first").css("display","block");
	},
	function(){
		$(".tip-first").css("display","none");
	});

	$("#tip-second").hover(function(){
		$(".tip-second").css("display","block");
	},
	function(){
		$(".tip-second").css("display","none");
	});


	$("#input").focus(function(){
		$(".search").css("border","1px solid #4d90fe");

	});
	$("#input").blur(function(){
		$(".search").css("border","1px solid #d9d9d9");

	});
}

$(document).ready(main);
