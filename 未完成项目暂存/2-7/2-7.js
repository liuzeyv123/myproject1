$(document).ready(function(){
	// var player=localStorage.getItem("player").split(",");
	var player=["杀手","杀手","平民","平民","平民","平民"];
	$(".img1").click(function(){
		window.location.href="../2-3/2-3.html";
	})

	for(var i=0 ;i<7;i++){
		$(".user").eq(i).show();
		$(".user1").eq(i).html(player[i]);
	}
	$(".hover").hide();
	$(".user").click(function(){
		$(".hover").hide();
		$(this).find(".hover").show();
		var dead=$(this).index();
		console.log(dead);
		$("#start").click(function(){
			if (player[dead]!=="杀手") {
				console.log($(".user1").eq(dead));
				$(".user1").eq(dead).css("background-color","#83b09a");
			}else{
				alert("你不能杀死队友");
			}
		})
	})
})