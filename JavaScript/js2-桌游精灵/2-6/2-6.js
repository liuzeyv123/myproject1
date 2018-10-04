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
	var kill = $(".play_one");
	var lastWorld = $(".play_two");
	var speak = $(".play_three");
	var vote = $(".play_four");
	
	var state = localStorage.state;
	if ( state == null ){
			state = 'alive';
		}
	if (state == 'voted' ){
			state = 'alive';
		}
	fsm = new StateMachine({
		init:state,
		//状态转变
		transition:[
			{name:'kill',form:'alive',to:'dead'},
			{name:'lastWorld',form:'dead',to:'spoke'},
			{name:'speak',form:'spoke',to:'known'},
			{name:'vote',form:'known',to:'voted'},
		],
		//各个状态时按键的颜色
		methods:{
			onDead:function(){
				kill.css("background-color", "#000");
			},
			onSpoke:function(){
				kill.css("background-color", "#000");
				lastWorld.css("background-color", "#000");
			},
			onKnown:function(){
				kill.css("background-color", "#000");
				lastWorld.css("background-color", "#000");
				speak.css("background-color", "#000");
			},
			onVoted:function(){
				kill.css("background-color", "#000");
				lastWorld.css("background-color", "#000");
				speak.css("background-color", "#000");
				vote.css("background-color", "#000");
			}
		}

	})
	//点击第一个杀人按钮时触发的事件
	kill.click(function(){
		if (fsm.state=="alive") {
			fsm.kill();                                //改变当前状态;
			//window.location.href ="../2-5/2-5.html";
			localStorage.state=fsm.state;			   //存储改变后的状态;

		}else{
			alert("请按顺序操作");
		}
	})
	//点击第二个遗言按钮时触发的事件
	lastWorld.click(function(){
		if (fsm.state=='dead'){
			alert("请死者亮明身份并且发表遗言");
			fsm.lastWorld();
			localStorage.state=fsm.state;
		}else{
			alert("请按顺序操作");
		}
		
	})
	//点击第三个讨论按钮时触发的事件
	speak.click(function(){
		if (fsm.state=='spock') {
			alert("请按顺序依次发言");
			fsm.speak();
			localStorage.state=fsm.state;
		}else{
			alert("请按顺序操作");
		}
	})
	//点击第四个投票按钮时触发的事件
	vote.click(function(){
		if (fsm.state=='konwn') {
			fsm.vote();
			//window.location.href="";
			lacalStorage.state=fsm.state;
		}else{
			alert("请按顺序操作");
		}
	})
})
//以下皆为废案========暂存
// var fsm = new StateMachine({
// 	init:state,
// 	transition:[
// 			{name:'play_one',form:'start',to:'night'},
// 			{name:'play_two',form:'night',to:'told'},
// 			{name:'play_three',form:'told',to:'speakEnd'},
// 			{name:'play_four',foem:'speakEnd',to:'voted'}
// 	],


// 	methods:{
// 		onPlay_one:function(){
// 			$(".play_one").css({backgroundColor:"#2375af"});
// 			$(".sanjiao").eq(0).css({borderRightColor:"#2375af"});	
// 		},
// 		onPlay_two:function(){
// 			$(".play_two").css({backgroundColor:"#000"});
// 			$(".sanjiao").eq(1).css({borderRightColor:"#000"});
// 			alert("请死者发表遗言");
// 		},
// 		onPlay_three:function(){
// 			$(".play_three").css({backgroundColor:"#000"});
// 			$(".sanjiao").eq(2).css({borderRightColor:"#000"});
// 			alert("请玩家依次发言");
// 		},
// 		onPlay_four:function(){
// 			$(".play_four").css({backgroundColor:"#000"});
// 			$(".sanjiao").eq(3).css({borderRightColor:"#000"});	
// 		}
// 	}
// });
//  switch (fsm.state){
//         case "night":
//             fsm.onPlay_one();
//             break;
//         case "told":
//             fsm.onPlay_one();
//             fsm.onPlay_two();
//             break;
//         case "speakEnd":
//             fsm.onPlay_one();
//             fsm.onPlay_two();
//            	fsm.onPlay_three();
//             break;
//         case "voted":
//             fsm.onPlay_one();
//             fsm.onPlay_two();
//            	fsm.onPlay_three();
//            	fsm.onPlay_four();    
         
// 	}

	////////////////////////////////////////////////////////////////////////////////////////////
	///

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