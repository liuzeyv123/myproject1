
$(document).ready(function(){
	var player=localStorage.getItem("player").split(",");	
	var death=JSON.parse(sessionStorage.getItem("death"));
	if (death==null){
		death=[];
	}
	console.log(death);
	for(i=0;i<=death.length;i++){
		$(".user1").eq(death[i]).css("background-color","rgb(131, 176, 154)");
	}
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
		dead=$(this).index();
	})
	$("#start").click(function(){
		if (player[dead]=="杀手") {
			alert("请勿伤害队友");		
		}else if($(".user1").eq(dead).css("background-color")=="rgb(131, 176, 154)"){
			alert("该玩家已死亡");
		}else{
			$(".user1").eq(dead).css("background-color","rgb(131, 176, 154)");
			
			death.push(dead);
			death=JSON.stringify(death);
			sessionStorage.setItem("death",death);
			window.location.href="";
		}

	})
})