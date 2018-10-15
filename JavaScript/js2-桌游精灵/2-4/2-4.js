window.onload=function(){
	var btn=document.getElementById("btn");
	var content1=document.getElementById("content1");
	var content2=document.getElementById("content2");
	var radius1=document.getElementById("radius1");
	var radius2=document.getElementById("radius2");
	var left=document.getElementById("left");
	var killer=localStorage.getItem("killerNum");
	var human=localStorage.getItem("humanNum");
	var text=document.getElementById("text");
	var i=2;
	console.log(killer);
	console.log(human);
//返回按钮
left.onclick=function(){
	window.location.href="../2-3/2-3.html";
}


//killer和human的人选问题============================================
	var kil=new Array(parseInt(killer));
	var hum=new Array(parseInt(human));
	console.log(kil);
	console.log(hum);
//遍历数组赋值
	for(var j=0;j<=killer-1;j++){
		kil[j]="杀手";
	}
	for(var k=0;k<=human-1;k++){
		hum[k]="平民";
	}
//数组的concat合并并且乱序
var player=kil.concat(hum);
player.sort(function(a,b){return Math.random()>0.5?-1:1;});

//按钮点击===========================================================
	btn.onclick=function(){
		if (i<=parseInt(killer)+parseInt(human)+1) {
			if (content1.style.display=="none") {
				radius2.innerHTML=i;
				btn.value="查看"+i+"号身份";
				content1.style.display="block";
				content2.style.display="none";

				if(i==parseInt(killer)+parseInt(human)+1){
					btn.value="请法官开始游戏";	
					btn.onclick=function(){
						window.location.href="../2-5/2-5.html";
					}
				}i++;
			}
			else{
				radius1.innerHTML=i;
				btn.value="请传递给"+i+"号玩家";
				content1.style.display="none";
				content2.style.display="block";
				text.innerHTML="你的身份是"+player[i-2];
				if(i==parseInt(killer)+parseInt(human)+1){
					radius1.innerHTML="法";
					btn.value="请传给法官";	
				}

			}
		}
	}
	localStorage.setItem("player",player);
}