$(document).ready(function(){
	var player=localStorage.getItem("player").split(",");
	var humanNum=localStorage.getItem("humanNum");
	var killerNum=localStorage.getItem("killerNum");
	var death=JSON.parse(sessionStorage.getItem("death"));
	var day=sessionStorage.getItem("day");
	console.log(death);
	console.log("day="+day);
	console.log("player="+player);
	console.log("killerNum="+killerNum);
	//点击返回主页按钮
	$('.img1').click(function(){
		window.location.href="../2-3/2-3.html";
		sessionStorage.clear();
		localStorage.clear();
	})
	$('.left').click(function(){
		window.location.href="../2-1/2-1.html";
		sessionStorage.clear();
		localStorage.clear();
	})

	$('.text1').html('本轮游戏共抓出了'+killerNum+'个杀手,共经历了'+day+'个白天');
	$('.text2').html('本次游戏有杀手'+killerNum+'人'+'<br/>'+'本次游戏有平民'+humanNum+'人')
	if(day>1){
		for(var k=1;k<day;k++){
			$('.container').append($('.day').eq(0).clone());
		}
	}
	for(var j=1;j<=parseInt(day);j++){
		$('.days').eq(j-1).html('第'+j+'天');
	}
	for(var i=0;i<death.length;i++){
		if(i%2==0||i==0){
			if(death[i]=='live'){
				$('.text3').eq(i).html('晚上:今夜无人死亡');
			}else{
				$('.text3').eq(i).html('晚上:'+(death[i]+1)+'号被杀手杀死,他的身份是'+player[death[i]]);
			}
		}else{
			$('.text3').eq(i).html('白天:'+(death[i]+1)+'号被投票处刑,他的身份是'+player[death[i]]);
		}
	}







})