	window.onload=function(){
		var lunbo1=document.getElementById("lunbo1");
		var prev=document.getElementById("btn1");
		var next=document.getElementById("btn2");
		
		console.log(lunbo1);
		//右侧按键
		next.onclick=function(){
			lunbo1.style.left=parseInt(lunbo1.style.left) - 100 + "%";
			console.log(lunbo1.style.left);
			if (lunbo1.style.left=="-300%"){
				
				setTimeout(function(){
					lunbo1.style.transition="none";
					lunbo1.style.left="0%";
					setTimeout(function(){
						lunbo1.style.transition="left linear 0.5s";
					},20)
				},700)
			}
			next.style.display="none";
			setTimeout(function(){
				next.style.display="block";
			},700)
		}
		//左侧按键
		prev.onclick=function(){
			lunbo1.style.left=parseInt(lunbo1.style.left) + 100 + "%";
			console.log(lunbo1.style.left);
			if (lunbo1.style.left=="0%"){
				
				setTimeout(function(){
					lunbo1.style.transition="none";
					lunbo1.style.left="-300%";
					setTimeout(function(){
						lunbo1.style.transition="left linear 0.5s";
					},20)
				},700)
			}
			prev.style.display="none";
			setTimeout(function(){
				prev.style.display="block";
			},700)
		}
		//自动播放
		var autoPlay;
		function play(){
			autoPlay=setInterval(function(){
				next.onclick();
			},2500)
		}
		play();
		//鼠标滑入滑出
		var body1=document.getElementById("body1");
		body1.onmouseover=function(){
			clearInterval(autoPlay);
		}
		body1.onmouseout=function(){
			play();
		}	
	}