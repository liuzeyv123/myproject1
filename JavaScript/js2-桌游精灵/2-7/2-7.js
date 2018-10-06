$(document).ready(function(){
	var player=localStorage.getItem("player").split(",");
	var death=JSON.parse(sessionStorage.getItem("death"));
	var xmx=sessionStorage.getItem("xmx");
	var killerNum=localStorage.getItem("killerNum");
	var humanNum=localStorage.getItem("humanNum");
	console.log(killerNum);
	console.log(humanNum);
	console.log(xmx);
	//点击img1返回上一页
	$(".img1").click(function(){
		window.location.href="../2-3/2-3.html";
	})
	//添加玩家box何其内容
	for(var i=0 ;i<player.length;i++){
		$(".user").eq(i).show();
		$(".user1").eq(i).html(player[i]);
	}
	//创建了death的空数组
	if (death==null){
		death=[];
	}
	console.log(death);
	//(保存)让以已死亡玩家变色
	for(i=0;i<=death.length;i++){
		$(".user1").eq(death[i]).css("background-color","rgb(131, 176, 154)");
	}
	//点击出刀
	$(".hover").hide();
	$(".user").click(function(){
		$(".hover").hide();
		$(this).find(".hover").show();
		dead=$(this).index();//设置了dead为全局
	})
	//点击下一步按钮后,判断玩家身份,决定是alert还是改变颜色(杀死)
	$("#start").click(function(){
		if (player[dead]=="杀手") {
			alert("请勿伤害队友");		
		}else if($(".user1").eq(dead).css("background-color")=="rgb(131, 176, 154)"){
			alert("该玩家已死亡");
		}else{
			$(".user1").eq(dead).css("background-color","rgb(131, 176, 154)");
			//存储死亡玩家的index数组(目的是让其刷新页面后不会重置)
			window.xmx=0;
			xmx++;	
			death.push(dead);
			death=JSON.stringify(death);
			sessionStorage.setItem("death",death);
			sessionStorage.setItem("xmx",xmx);
			window.location.href="";
			if (xmx==humanNum){
				alert("OK");
			}
		}


	})
	//判断游戏胜利条件


})