$(document).ready(function (){
	var player=localStorage.getItem("player").split(",");
	var killerNum=localStorage.getItem("killerNum");
	var humanNum=localStorage.getItem("humanNum");
	var dead=sessionStorage.getItem("dead");
	var dead1=sessionStorage.getItem("dead1");
	var day=sessionStorage.getItem('day');
	var z=sessionStorage.getItem("z");
	var y=sessionStorage.getItem("y");
	var start=sessionStorage.getItem("state");
	console.log(killerNum);
	console.log(humanNum);
	$("#headerLeft").click(function(){
		sessionStorage.clear("state");
		window.location.href="../2-1/2-1.html";
	});
	//点击隐藏第一天,第二天.....的具体内容	
	$(".day1").click(function(){
		$(this).next(".incident").slideToggle(500);
	});

	//按钮回到法官日志;
	$("input").eq(1).click(function(){
		window.location.href="../2-5/2-5.html";
	});
	//有限状态机
	var kill = $(".play_one");
	var lastWorld = $(".play_two");
	var speak = $(".play_three");
	var vote = $(".play_four");
	
	//设置状态机当前状态,当state(状态)为空时候,从alive开始,当状态为voted时(一个循环结束时),从头开始(alive)
	if (start==null) {
		start="alive";
		day=1;
		sessionStorage.setItem('day',day);
		sessionStorage.setItem('state',start)
	}else if (start=="voted") {		
		start="alive";
		day++;
		sessionStorage.setItem('day',day);
		sessionStorage.setItem('state',start)
	}
	for(var i=0;i<parseInt(day);i++){
		$(".day1").eq(i).html("第"+(i+1)+"天");
	}
	console.log(day);

	var fsm = new StateMachine({
		init:start,
		//状态转变
		transitions:[
			{name:"kill",form:'alive',to:'dead'},
			{name:"lastWorld",form:'dead',to:'spoke'},
			{name:"speak",form:'spoke',to:'known'},
			{name:"vote",form:'known',to:'voted'},
		],
		//各个状态时按键的颜色
		methods:{
			onKill:function(){
				kill.eq(parseInt(day)-1).css("background-color", "#000");
				$(".sanjiao").eq(0).css("border-right-color","#000");
			},
			onLastWorld:function(){
				lastWorld.eq(parseInt(day)-1).css("background-color", "#000");
				$(".sanjiao").eq(1).css("border-right-color","#000");
			},
			onSpeak:function(){
				speak.eq(parseInt(day)-1).css("background-color", "#000");
				$(".sanjiao").eq(2).css("border-right-color","#000");
			},
			onVote:function(){
				vote.eq(parseInt(day)-1).css("background-color", "#000");
				$(".sanjiao").eq(3).css("border-right-color","#000");
			}
		}
	});

	switch(fsm.state){
		case "dead":
			fsm.onKill();
			break;
		case "spoke":
			fsm.onKill();
			fsm.onLastWorld();
			break;
		case "known":
			fsm.onKill();
			fsm.onLastWorld();
			fsm.onSpeak();
			break;
		case "voted":
			fsm.onKill();
			fsm.onLastWorld();
			fsm.onSpeak();
			fsm.onVote();
			break;
	}
	//点击第一个杀人按钮时触发的事件
	console.log(fsm.state);
	$('.container').eq(parseInt(day)-1).find(kill).click(function(){	
		console.log(fsm.state);
		if (fsm.state=='alive') {
			        //改变当前状态;
			window.location.href ="../2-7/2-7.html";
			sessionStorage.setItem("inner",1);
			
			fsm.kill();  
			sessionStorage.setItem("state",fsm.state);//存储改变后的状态;			
		}else{
			alert("请按顺序操作");
		}
	});
	//点击第二个遗言按钮时触发的事件
	lastWorld.eq(parseInt(day)-1).click(function(){
		console.log(fsm.state);
		if (fsm.state=='dead'){
			alert("请死者亮明身份并且发表遗言");
			fsm.lastWorld();
			sessionStorage.setItem("state",fsm.state);
		}else{
			alert("请按顺序操作");
		}	
	});
	//点击第三个讨论按钮时触发的事件
	speak.eq(parseInt(day)-1).click(function(){
		console.log(fsm.state);
		if (fsm.state=='spoke') {
			alert("请活着的玩家依次发言");
			fsm.speak();
			sessionStorage.setItem("state",fsm.state);
		}else{
			alert("请按顺序操作");
		}
	});
	//点击第四个投票按钮时触发的事件
	vote.eq(parseInt(day)-1).click(function(){
		console.log(fsm.state);
		if (fsm.state=='known') {
			fsm.vote();
			day++;
			window.location.href ="../2-7/2-7.html";
			sessionStorage.setItem("inner",2);
			sessionStorage.setItem("state",fsm.state);
			$(".container").append($(".day1").clone(true));
			$(".container").append($(".incident").clone(true));
		}else{
			alert("请按顺序操作");
		}
	});

//内容增添//===============================================================
	if (z==1){
		kill.after('<p class="killInfo">'+'被杀死的是'+(parseInt(dead)+1)+'号玩家,身份是'+player[dead]+'</p>');	
	}else if (z==2){
		kill.after('<p class="killInfo">'+'今晚无人死亡'+'</p>');
	}
	if (y==1) {
		vote.after('<p class="killInfo">'+'被杀死的是'+(parseInt(dead1)+1)+'号玩家,身份是'+player[dead1]+'</p>');
	}
});
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