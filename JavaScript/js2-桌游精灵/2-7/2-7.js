$(document).ready(function(){
	var player=localStorage.getItem("player").split(",");

	$(".img1").click(function(){
		window.location.href="../2-3/2-3.html";
	})

	// for(var i=0 ;i<player.length;i++){
	// 	$(".user").eq(i).show();
	// 	$(".user1").eq(i).html(player[i]);
	// }

	for(var i=0 ;i<7;i++){
		$(".user").eq(i).show();
		$(".user1").eq(i).html(player[i]);
	}

	$(".hover").hide();
	$(".user").click(function(){
		console.log($(this));
		console.log($(this).index());
	})
	console.log($(".user"));

})