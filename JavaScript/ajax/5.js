$(document).ready(function(){
//验证码设置
	function random_code(){
		code="";
		var code_arr=new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
		for(var i=0;i<4;i++){
			var index=parseInt(Math.random()*36);
			code+=code_arr[index];
		}
		$(".identifying").html(code);
	}random_code();
//验证码换一个按钮
	$("#swap").click(function(){
		random_code();
	})
//登录按钮点击事件-判断
	$(".login").click(function(){
		if ($("#code1").val()==code){
			if ($("#password").val()=="" || $("#user").val()==""){
				$(".placeholder1").html("请输入用户名和密码");
				random_code();
			}else{
				$.ajax({
					url:"/carrots-admin-ajax/a/login",
					type:"POST",
					data:{
						name:$("#user").val(),
						pwd:$("#password").val()
					},
					dataType:"json",
					success: function(a){	
						console.log(a.message);					
						console.log(a);
						if(a.message == "success"){
	                        location.href = 'http://dev.admin.carrots.ptteng.com';
	                    }else{
	                    	$(".placeholder1").html(a.message);
	                    }
					}
				})
			}
		}else if($("#code1").val()==""){
			$(".placeholder1").html("请输入验证码");
		}else{
			$(".placeholder1").html("验证码错误");
			random_code();
		}
	})
})