window.onload=function(){
	var player=localStorage.getItem("player").split(",");
	var img1=document.getElementById("img1");
	var user=document.getElementsByClassName("user");
	var userText=document.getElementsByClassName("user1");
	var hover=document.getElementsByClassName("hover");
	var start=document.getElementById("start");

	img1.onclick=function(){
		window.location.href="../2-3/2-3.html";
	}
	for(var i=0;i<player.length;i++){
		user[i].style.display="block";
		userText[i].innerHTML=player[i];
		hover[i].style.display="none";
	}
	start.onclick=function(){
		window.location.href="../2-6/2-6.html";
	}



}