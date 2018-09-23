window.onload=function(){
	var box=document.getElementById("box");
	var	div1=document.getElementsByClassName("div1");
	var	len=div1.length;
	var t;
	var btn1=document.getElementById("btn1");



	function autoplay(){
	//随机颜色-封装函数
		function randomColor(){
		    var color="#";
		    var colorArr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		    for(var i=0;i<6;i++){
		        var num=parseInt(Math.random()*15);
		        color+=colorArr[num];
		    }if(color=="#ffa500"){
		    	i--;
		    }
		    return color;
		}
		//随机3个数
		var random=parseInt(Math.random()*8),
			num=[];
			for(var i=0;i<3;i++){
				num[i]=parseInt(Math.random()*8);
				for(var j=0;j<i;j++){
					if (num[i]==num[j]){
						j--;
						i--;
					}
				}
			}

		//闪烁循环1-颜色复原
				for (var m=0;m<9;m++){
				div1[m].style.backgroundColor="orange";
			}
		//闪烁循环2-随机取div赋值颜色
				div1[num[0]].style.backgroundColor=randomColor();
				div1[num[1]].style.backgroundColor=randomColor();
				div1[num[2]].style.backgroundColor=randomColor();
			}
	btn1.onclick=function(){
		autoplay();
		t=setInterval(autoplay,2000);
		btn1.onclick=function(){};
	}
	//按键结束闪烁
	var btn2=document.getElementById("btn2");
	btn2.onclick=function(){
		clearInterval(t);
		for (var m=0;m<9;m++){
			div1[m].style.backgroundColor="orange";
		}
	btn1.onclick=function(){
		autoplay();
		t=setInterval(autoplay,2000);
		btn1.onclick=function(){};}
	}
}