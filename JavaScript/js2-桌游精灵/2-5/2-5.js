$(document).ready(function(){
	var player=localStorage.getItem("player").split(",");
	var death=JSON.parse(sessionStorage.getItem("death"));
	console.log(death);

	$(".img1").click(function(){
		localStorage.clear();
		sessionStorage.clear();
		window.location.href="../2-3/2-3.html";
	})

	for(var j=0;j<death.length;j++){
		$(".user1").eq(death[j]).css('background','#83b09a');	
	}

	for(var i=0 ;i<player.length;i++){
		$(".user").eq(i).show();
		$(".user1").eq(i).html(player[i]);
	}
	
	$(".hover").hide();

	$("#start").click(function(){
		window.location.href="../2-6/2-6.html";
	})
})