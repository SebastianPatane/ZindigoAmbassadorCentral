(function($) {

	$("#general-email").click(function(){
		$(".dropdown-toggle").removeClass("selected");
		$("#general-email").addClass("selected");
		$(".email-type").hide();
		$("#general-type").show();
	});
	$("#holiday-email").click(function(){
		$(".dropdown-toggle").removeClass("selected");
		$("#holiday-email").addClass("selected");
		$(".email-type").hide();
		$("#holiday-type").show();
	});
	$("#brand-email").click(function(){
		$(".dropdown-toggle").removeClass("selected");
		$("#brand-email").addClass("selected");
		$(".email-type").hide();
		$("#brand-type").show();
	});
	$("#promo-email").click(function(){
		$(".dropdown-toggle").removeClass("selected");
		$("#promo-email").addClass("selected");
		$(".email-type").hide();
		$("#promo-type").show();
	});
	
	
	
	$("#email-friend").click(function(){
		$("#email-friend").parents("#email-step-three").find("img").attr("src", "../assets/images/placeholder.jpg");
		$(".email-option").removeClass("selected");
		$("#email-friend").addClass("selected");
		$("#import").hide();
		$("#add-friend").show();		
	});
	$("#google").click(function(){
		$("#google").parents("#email-step-three").find("img").attr("src", "../assets/images/gmail.jpg");
		$(".email-option").removeClass("selected");
		$("#google").addClass("selected");
		$("#import").show();
		$("#add-friend").hide();		
	});
	$("#yahoo").click(function(){
		$("#yahoo").parents("#email-step-three").find("img").attr("src", "../assets/images/gmail.jpg");
		$(".email-option").removeClass("selected");
		$("#yahoo").addClass("selected");
		$("#import").show();
		$("#add-friend").hide();		
	});
	$("#msn").click(function(){
		$("#msn").parents("#email-step-three").find("img").attr("src", "../assets/images/gmail.jpg");
		$(".email-option").removeClass("selected");
		$("#msn").addClass("selected");
		$("#import").show();
		$("#add-friend").hide();		
	});
	$("#aol").click(function(){
		$("#aol").parents("#email-step-three").find("img").attr("src", "../assets/images/gmail.jpg");
		$(".email-option").removeClass("selected");
		$("#aol").addClass("selected");
		$("#import").show();
		$("#add-friend").hide();		
	});
	$("#outlook").click(function(){
		$("#outlook").parents("#email-step-three").find("img").attr("src", "../assets/images/gmail.jpg");
		$(".email-option").removeClass("selected");
		$("#outlook").addClass("selected");
		$("#import").show();
		$("#add-friend").hide();		
	});
	$("#mac").click(function(){
		$("#mac").parents("#email-step-three").find("img").attr("src", "../assets/images/gmail.jpg");
		$(".email-option").removeClass("selected");
		$("#mac").addClass("selected");
		$("#import").show();
		$("#add-friend").hide();		
	});
	
})(jQuery);
