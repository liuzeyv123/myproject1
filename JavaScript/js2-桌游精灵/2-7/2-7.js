$(document).ready(function(){
	var player=localStorage.getItem("player").split(",");
	var death=JSON.parse(sessionStorage.getItem("death"));
	var inner=sessionStorage.getItem("inner");
	var killerNum=localStorage.getItem("killerNum");
	var humanNum=localStorage.getItem("humanNum");
	console.log(killerNum);
	console.log(humanNum);	
	console.log(inner);
	//点击img1返回上一页
	$(".img1").click(function(){
		sessionStorage.clear('start');
		window.location.href="../2-3/2-3.html";
	})
	//添加玩家box何其内容
	for(var i=0 ;i<player.length;i++){
		$(".user").eq(i).show();
		$(".user1").eq(i).html(player[i]);
	}
	//创建了death的空数组
	if (death==null){
		death=new Array();
	}
	console.log(death);
	//(保存)让以已死亡玩家变色
	for(i=0;i<=death.length;i++){
		$(".user1").eq(death[i]).css("background-color","rgb(131, 176, 154)");
	}
	//点击下一步按钮后,判断玩家身份,决定是alert还是改变颜色(杀死)
	var xmx=sessionStorage.getItem("xmx");
	if (xmx==null){
		xmx=0;
	}
	var omo=sessionStorage.getItem("omo");
	if (omo==null){
		omo=0;
	}
	console.log(xmx);
	if (inner==1){
		$(".hover").hide();
		window.dead=null;
		$(".user").click(function(){
			$(".hover").hide();
			$(this).find(".hover").show();
			window.dead=$(this).index();//设置了dead为全局
			console.log(player[dead]);
		})
		$("#start").click(function(){
			if (player[dead]=="杀手") {
				alert("请勿伤害队友");		
			}else if(dead!==null && $(".user1").eq(dead).css("background-color")=="rgb(131, 176, 154)"){
				alert("该玩家已死亡");
			}else if(dead==null){
				death.push("live");
				window.z=2;
				sessionStorage.setItem("z",z);
				window.location.href="../2-6/2-6.html";
				death=JSON.stringify(death);
				sessionStorage.setItem("death",death);
			}else{
				$(".user1").eq(dead).css("background-color","rgb(131, 176, 154)");
				//存储死亡玩家的index数组(目的是让其刷新页面后不会重置)
				xmx++;	
				death.push(dead);
				death=JSON.stringify(death);
				sessionStorage.setItem("death",death);
				sessionStorage.setItem("xmx",xmx);
				sessionStorage.setItem("dead",dead);
				
				if (xmx==humanNum){
					
					window.location.href="../2-9/2-9.html";
				}else{
					window.location.href="../2-6/2-6.html";
				}
				//传递一个参数x,click时z=1,在2-6中设置,if(z==1){........玩家身份....}
				window.z=1;
				sessionStorage.setItem("z",z);
			}
		})
	}
	if (inner==2){
		$("span").html("&nbsp;&nbsp;&nbsp;请选择被投票处决的玩家");
		$(".foot").html("点击玩家头像，标记被投票处决的玩家");
		$("#start").html("决定处决该玩家");

		$(".hover").hide();
		window.dead1=null;
		$(".user").click(function(){
			$(".hover").hide();
			$(this).find(".hover").show();
			window.dead1=$(this).index();//设置了dead为全局
			console.log(player[dead1]);
		})
		$("#start").click(function(){	
			if(dead1!==null && $(".user1").eq(dead1).css("background-color")=="rgb(131, 176, 154)"){
				alert("该玩家已死亡");
			}else if(dead1==null){
				alert("请选择被投票处决的玩家");
			}else{
				$(".user1").eq(dead1).css("background-color","rgb(131, 176, 154)");
				//存储死亡玩家的index数组(目的是让其刷新页面后不会重置)
				if(player[dead1]=="平民"){
					xmx++;//已死亡平民数+1
				}else{
					omo++;//已死亡杀手数+1
				}	
				death.push(dead1);
				death=JSON.stringify(death);
				sessionStorage.setItem("death",death);
				sessionStorage.setItem("xmx",xmx);
				sessionStorage.setItem("omo",omo);
				sessionStorage.setItem("dead1",dead1);
				
				if (xmx==humanNum){
					
					window.location.href="../2-9/2-9.html";
				}else if(omo==killerNum){
				
					window.location.href="../2-8/2-8.html";	
				}else{
				//传递一个参数x,click时z=1,在2-6中设置,if(z==1){........玩家身份....}
					window.y=1;
					sessionStorage.setItem('y',y);
					window.location.href="../2-6/2-6.html";
				}
			}
		})
	}
})