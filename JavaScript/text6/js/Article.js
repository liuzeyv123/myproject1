app.controller('ArticleCtrl',function($scope,$http,$state,$stateParams){
    // $scope.data = $stateParams;
    $scope.startDate = ($stateParams.startAt === undefined) ? undefined : Number($stateParams.startAt);
    $scope.endDate = ($stateParams.endAt === undefined) ? undefined : Number($stateParams.endAt);
    $scope.type = $stateParams.type;
    $scope.status = $stateParams.status;
    $scope.size = ($stateParams.size === undefined)? 10 : $stateParams.size;
    //获取日期
    $scope.format = 'yyyy-MM-dd';
    $scope.altInputFormats = ['yyyy-M!-d!'];
    $scope.today = new Date();

    //开始日期
    $scope.popupStart = {
        opened: false
    };
    $scope.openStart = function () {
        $scope.popupStart.opened = true;
        if ($scope.endDate === undefined) {
            $scope.maxDay = $scope.today;
        } else {
            $scope.maxDay = $scope.endDate;
        }
    };

    //结束日期
    $scope.popupEnd = {
        opened: false
    };
    $scope.openEnd = function () {
        $scope.popupEnd.opened = true;
        $scope.endDate = undefined;
    };

	//http GET请求获取列表数据以及传递部分参数
	$scope.getSearch=function(){
		$http({
			method:'GET',
			url:'/carrots-admin-ajax/a/article/search',
			params: {
	            page: $stateParams.page,//当前列表页数
	            size: $stateParams.size,//列表每页显示条数
	            type: $stateParams.type,//搜索类型
	            status: $stateParams.status, //搜索状态
	            startAt:$stateParams.startAt,//搜索开始时间
	            endAt: $stateParams.endAt//搜索截止时间
	        }
		}).then(function successCallback(rep){
			console.log(rep);
			$scope.list=rep.data.data.articleList;  //搜索后的列表数据
			$scope.totalItems = rep.data.data.total;//搜索后的数据总条数
			$scope.nowPage = $stateParams.page;//搜索后的页数
			$scope.ulsize=rep.data.data.size;
		});
	};
	$scope.getSearch();

	//搜索栏,搜索按钮事件

	$scope.submit=function(){
		var startD;
        var endD;
        var page;
        if($scope.startDate === undefined) {
            startD = undefined;
        }else {
            startD = isNaN($scope.startDate.toString()) ? $scope.startDate.getTime() : $scope.startDate;
        }
        if($scope.endDate === undefined) {
            endD = undefined;
        }else {
            endD = isNaN($scope.endDate.toString()) ? $scope.endDate.getTime() + 86399999 : $scope.endDate;
        }
        console.log($scope.startDate);
		$state.go('homepage.Article',{
			page:$scope.inputPage,
			size:$scope.size,
			status:$scope.status,
			type:$scope.type,
			startAt: startD,
            endAt: endD
		},{
			reload:true
		});
		console.log($stateParams.size);
	}
	//分页页码变化时
	$scope.change=function(){
		$state.go('homepage.Article',{
			page:$scope.nowPage
		},{
			reload:true
		});
	}
	//重置按钮
	$scope.clear=function(){
		$state.go('homepage.Article',{
			page:"",
			size:"",
			status:"",
			type:"",
			startAt:"",
            endAt:""
        },{
        	reload:true
		});
	}
	//1======上线,下线按钮-出现模态框
	$scope.onoffline=function(){
		var id1=this.x.id;
		var status1=this.x.status==1 ? status1=2 : status1=1;
		$scope.sta=function(){
			switch(status1){
				case 2:return"下线后模块将不再展示,是否依然要下线?";
				case 1:return"上线后模块将展示,是否确认上线?";
			}
		};
		$("#modal-onoffline").modal("toggle");
		//模态框提交再确认
		$scope.yes=function(){
			$http({
				method:"put",
				url:"/carrots-admin-ajax/a/u/article/status",
				params:{
					id:id1,
					status:status1
				}
			}).then(function(rep2){
				$state.reload();
				$("#modal-onoffline").modal("toggle")
			});
		}	
	};
	//2=======编辑按钮
	



	
	//3=======删除按钮
	$scope.delete=function(){
		var id=this.x.id;
		$scope.sta=function(){
			return"删除后将清空该项目一切数据,请再次确认是否删除?"
		};
		$("#modal-onoffline").modal("toggle");
		//模态框提交再确认
		$scope.yes=function(){
			$http({
				method:"delete",
				url:"/carrots-admin-ajax/a/u/article/"+id
			}).then(function(rep3){
				$state.reload();
				$("#modal-onoffline").modal("toggle")
			});
		}	
	}
//跳转新增article
	$scope.add=function(){
		$state.go('homepage.articleAdd');
	}

});


app.filter('type1',function(){
	return function(num1){
		switch(num1){
			case 0:return"首页banner";
            case 1:return"找职位banner";
            case 2:return"找精英banner";
            case 3:return"行业大图";
		}
	}
});

app.filter('status1',function(){
	return function(num2){
		switch(num2){
			case 1:return"上线";
			case 2:return"草稿";
		}
	}
});

app.filter('btn1',function(){
	return function(num3){
		switch(num3){
			case 1:return"下线";
			case 2:return"上线";
		}
	}
})