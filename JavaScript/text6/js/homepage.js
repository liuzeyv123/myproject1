app.controller("homepageCtrl",function($scope,$http,$state){
	$scope.var1=false;
	$scope.var2=false;
	$scope.var3=false;
	$scope.icon1="<";
	$scope.icon2="<";
	$scope.icon3="<";
	// 注销按钮事件
	$scope.logout=function(){
		$http({
			method:"POST",
			url:"/carrots-admin-ajax/a/logout",
		}).then(function success(out){
			console.log(out);
			if (out.data.code==0) {
				sessionStorage.clear();
				$state.go("logins",{});
			}
		})
	}
	$scope.show1=function(){
		if ($scope.var1==false) {
			$scope.var1=true;
			$scope.icon1="v";
		}else{
			$scope.var1=false;
			$scope.icon1="<";
		}			
	}
	$scope.show2=function(){
		if ($scope.var2==false) {
			$scope.var2=true;
			$scope.icon2="v";
		}else{
			$scope.var2=false;
			$scope.icon2="<";
		}
	}
	$scope.show3=function(){
		if ($scope.var3==false) {
			$scope.var3=true;
			$scope.icon3="v";
		}else{
			$scope.var3=false;
			$scope.icon3="<";
		}
	}
})