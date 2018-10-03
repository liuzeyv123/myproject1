$(document).ready(function () {
	var player=localStorage.getItem("player").split(",");
	$("#headerLeft").click(function(){
		window.location.href="../2-5/2-5.html";
	})
	//点击隐藏第一天,第二天.....的具体内容	
	$(".day1").click(function(){
		$(".incident").slideToggle(500);
	})
	//按钮回到法官日志;
	$("input").eq(1).click(function(){
		window.location.href="../2-5/2-5.html";
	})
	//有限状态机
var fsm = new StateMachine({
	init: 'homicide',
	transition:[
			{name:'play_one',form:'start',to:'night'},
			{name:'play_two',form:'night',to:'told'},
			{name:'play_three',form:'told',to:'speakEnd'},
			{name:'play_four',foem:'speakEnd',to:'voted'}
	]
});

methods:{
	onPlay_one:function(){
		$(".play_one").css("backgroundColor","#2375af");
		$(".sanjiao").eq(0).css("borderRightColor","#2375af");
		
	},
	onPlay_two:function(){
		$(".play_two").css("backgroundColor","#000");
		$(".sanjiao").eq(1).css("borderRightColor","#000");
		alert("请死者发表遗言");
	},
	onPlay_three:function(){
		$(".play_three").css("backgroundColor","#000");
		$(".sanjiao").eq(2).css("borderRightColor","#000");
		alert("请玩家依次发言");
	},
	onPlay_four:function(){
		$(".play_four").css("backgroundColor","#000");
		$(".sanjiao").eq(3).css("borderRightColor","#000");
		
	}
}
 switch (fsm.state){
        case "night" :
            fsm.onPlay_one();
            aboutPlay_one();
            break;
        case "told":
            fsm.onPlay_one();
            fsm.onPlay_two();
            break;
        case "speakEnd":
            fsm.onPlay_one();
            fsm.onPlay_two();
           	fsm.onPlay_three();
            break;
        case "voted":
            fsm.onPlay_one();
            fsm.onPlay_two();
           	fsm.onPlay_three();
           	fsm.onPlay_four();
            aboutPlay_four();
            aboutPlay_one();
    }
// $('.play_one').click(function(){
// 	fsm.killer();
// })
// $('.play_two').click(function(){
// 	fsm.lastWorld();
// })
// $('.play_three').click(function(){
// 	fsm.speak();
// })
// $('.play_four').click(function(){
// 	fsm.vote();
// })





// 	$(".play_one").on("click",function(){
// 		$(this).css("background-color","#000");
// 		$(".sanjiao").eq(0).css("border-right-color","#000");
// 		// window.location.href="";
// 	})

// 	//2
// 	$(".play_two").on("click",function(){
	
// 		if ($(".play_one").css("background-color")=="rgb(0, 0, 0)" && $(".play_two").css("background-color")!=="rgb(0, 0, 0)"){
// 			$(this).css("background-color","#000");
// 			$(".sanjiao").eq(1).css("border-right-color","#000");
// 			alert("请死者发表遗言");
// 		}else{
// 			alert("请按照游戏步骤依次进行");
// 		}
// 	})
// 	//3
// 	$(".play_three").on("click",function(){	
// 		if ($(".play_two").css("background-color")=="rgb(0, 0, 0)" && $(".play_three").css("background-color")!=="rgb(0, 0, 0)") {
// 			$(this).css("background-color","#000");
// 			$(".sanjiao").eq(2).css("border-right-color","#000");
// 			alert("请玩家依次发言");
// 		}else{
// 			alert("请按照游戏步骤依次进行");
// 		}
// 	})
// 	//4
// 	$(".play_four").on("click",function(){
// 		if ($(".play_three").css("background-color")=="rgb(0, 0, 0)" && $(".play_four").css("background-color")!=="rgb(0, 0, 0)") {
// 			$(this).css("background-color","#000");
// 			$(".sanjiao").eq(3).css("border-right-color","#000");
// 			//window.location.href="";
// 		}else{
// 			alert("请按照游戏步骤依次进行");
// 		}
// 	})
// })