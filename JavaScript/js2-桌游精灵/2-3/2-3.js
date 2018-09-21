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

	img1.onclick=function(){
		window.location.href="../2-1/2-1.html";
	}
	number.onclick=function(){
		number.style.backgroundColor="#dedede";
	}
	number.onblur=function(){
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
	yes.onclick=function(){
		div1.style.display="none";
	}
	no.onclick=function(){
		div1.style.display="none";
	}
}	