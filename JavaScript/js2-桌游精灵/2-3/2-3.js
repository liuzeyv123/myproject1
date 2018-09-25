window.onload=function(){
	var reg=/(^[4-9]$)|(^[1][0-8]$)/;
	var img1=document.getElementById("img1");
	var btn=document.getElementById("btn");
	var number=document.getElementById("number");
	var killer=document.getElementById("killer");
	var human=document.getElementById("human");
	var div1=document.getElementById("div1");
	var yes=document.getElementById("yes");
	var no= document.getElementById("no");
	var range=document.getElementById("range");
	var left11=document.getElementById("left11");
	var left22=document.getElementById("left22");
//按钮跳转返回
	img1.onclick=function(){
		window.location.href="../2-1/2-1.html";
	}
 //玩家人数变化时,分配杀手平民的函数
	function player(){
				number.style.backgroundColor="#fff";
				killer.innerHTML="&nbsp;";
				human.innerHTML="&nbsp;";
				if (reg.test(number.value)!=true) {
					div1.style.display="block";
				}
				else{
					killer.innerHTML=parseInt(number.value*1/4);
					human.innerHTML=number.value - killer.innerHTML;
					btn.onclick=function(){		
						localStorage.setItem("killer",killer.innerHTML);
						localStorage.setItem("human",human.innerHTML);
						window.location.href="../2-4/2-4.html";
				}
			}
		}


//玩家人数输入框
	number.onclick=function(){
		number.style.backgroundColor="#dedede";
	}
	
	number.onblur=function(){
		player();
		range.value=number.value;
	}
//弹窗=================
	yes.onclick=function(){
		div1.style.display="none";
	}
	no.onclick=function(){
		div1.style.display="none";
	}
//滑动条=========
	range.oninput=function(){
		number.value=range.value;
		player();
	}
	left11.onclick=function(){
		range.value--;
		number.value=range.value;
		player();
	}
	left22.onclick=function(){
		range.value++;
		number.value=range.value;
		player();
	}
}	