//var app=angular.module('myapp1',[]);
app.controller("loginsCtrl",function($scope,$http,$state){
	
	$scope.loginclk=function(){
		//console.log($scope.userName,$scope.passWord,$scope.worry);
		if ($scope.userName==''||$scope.passWord=='') {
			$scope.worry='请输入用户名和密码';
		}else{
			$http({
				method:"POST",
				url:"/carrots-admin-ajax/a/login",
				params:{
					name:$scope.userName,
					pwd:$scope.passWord
				}
			})
			.then(function success(rep){
				$scope.worry=rep.data.message;
				if (rep.data.message=="success") {
					$state.go('homepage',{});
				}
			//console.log(rep);
			//	console.log($scope.userName,$scope.passWord,$scope.worry);
			});
		}
	}		
});