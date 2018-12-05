app.controller('articleAddCtrl',function($scope,$http,$state,$stateParams,FileUploader){
	//上传图片预览插件封装
	
	$scope.Article_name="新增";
	function iconview(){ 
		$scope.click=function(){
	 		$scope.ngif="true";
	 		var file=$("#file").get(0).files[0];
	 		$scope.file=file;	
	 		$scope.iconname=$scope.file.name;
	 		$scope.iconsize=($scope.file.size/1024).toFixed(2)+"kb";	
	 	} 
		var uploader = $scope.uploader = new FileUploader();
	    uploader.onAfterAddingFile = function(fileItem) {
	      	var reader = new FileReader();
	      	
	      	reader.addEventListener("load", function (e) {
	        //文件加载完之后，更新angular绑定
	          	$scope.iconUrl = e.target.result;
	          	var iconurl1=$scope.iconUrl;
	          	$scope.$apply();
	      	}, false);
	      	reader.readAsDataURL(fileItem._file);
	    };
    }iconview();

    //数据上线,暂存按钮
    $scope.dataup=function(){
    	var file=$("#file").get(0).files[0];
    		console.log(file);
			console.log($scope.title);
			console.log($scope.nowType);
			console.log($scope.nowIndustry);
			console.log($scope.iconUrl);
			console.log($scope.content);
			console.log($scope.url);
    	$http({
    		method:"POST",
    		url:"/carrots-admin-ajax/a/u/article",
    		params:{
    			title:$scope.title,
    			type:$scope.nowType,
    			status:'1',
    			img:$scope.iconUrl,
    			content:$scope.content,
    			url:$scope.url,
    			industry:$scope.nowIndustry
    		}
    	}).then(function(rep){
    		$state.go('homepage.Article');
    		
    	})	
    }
    $scope.datadown=function(){
    	var file=$("#file").get(0).files[0];
    		console.log(file);
			console.log($scope.title);
			console.log($scope.nowType);
			console.log($scope.nowIndustry);
			console.log($scope.iconUrl);
			console.log($scope.content);
			console.log($scope.url);
    	$http({
    		method:"POST",
    		url:"/carrots-admin-ajax/a/u/article",
    		params:{
    			title:$scope.title,
    			type:$scope.nowType,
    			status:'2',
    			img:$scope.iconUrl,
    			content:$scope.content,
    			url:$scope.url,
    			industry:$scope.nowIndustry
    		}
    	}).then(function(rep){
    		$state.go('homepage.Article');
    	})	
    }
    //编辑按钮进入页面时,进行的id数据获取======================
    if ($stateParams.id){
		console.log($stateParams.id);
		$scope.Article_name="编辑";
		$http({
			method:"get",
			url:"/carrots-admin-ajax/a/article/"+$stateParams.id
		}).then(function(rep){
			console.log(rep);
			
			$scope.title=rep.data.data.article.title;
			$scope.nowType=String(rep.data.data.article.type);
			$scope.nowIndustry=String(rep.data.data.article.industry);
			$scope.iconUrl=rep.data.data.article.img;
			$scope.content=rep.data.data.article.content;
			$scope.url=rep.data.data.article.url;	
		})
	}
	//提交时各向内容不为空
	$scope.disabledA=function(){
		if ($scope.title!=undefined&&
			$scope.nowType!=undefined&&
			
			$scope.iconUrl!=undefined&&
			$scope.content!=undefined&&
			$scope.url!=undefined) {
			return false;
		}else{
			return true;
		}
	}


	




$scope.type=[{
	value:0,
 	name:'首页banner'
	},{
 	value:1,
 	name:'找职位banner'
	},{
	value:2,
 	name:'找精英banner'
	},{
 	value:3,
 	name:'行业大图'
}];

$scope.industry=[{
 	value:0,
 	name:'移动互联网'
	},{
	value:1,
 	name:'电子商务'
	},{
 	value:2,
 	name:'企业服务'
	},{
 	value:3,
 	name:'O2O'
	},{
 	value:4,
 	name:'教育'
	},{
 	value:5,
 	name:'金融'
	},{	
 	value:6,
 	name:'游戏'
}];

})



//======================================
	// function imageview(a) {
	// 	var file = a.files[0];
	// 	if(window.FileReader) {
	// 		var fr = new FileReader();
	// 		fr.onloadend = function(e) {
	// 			document.getElementById("show").src = e.target.result;
	// 		};
	// 		fr.readAsDataURL(file);
	// 	}
	// }