app.controller('articleAddCtrl',function($scope,$http,$state,$stateParams,FileUploader){

	//上传图片预览插件封装
	function iconview(){  
		var uploader = $scope.uploader = new FileUploader();
	    uploader.onAfterAddingFile = function(fileItem) {
	      var reader = new FileReader();
	      reader.addEventListener("load", function (e) {
	        //文件加载完之后，更新angular绑定
	        $scope.$apply(function(){
	          $scope.iconUrl = e.target.result;
	          
	          var iconurl1=$scope.iconUrl;
	          console.log(iconurl1);
	        });
	      }, false);
	      reader.readAsDataURL(fileItem._file);
	    };
    }iconview();
    
 	$scope.click=function(){
 		$scope.ngif="true";
 		var file=$("#file").get(0).files[0];
 		$scope.file=file;
 		console.log(file);
 		$scope.iconname=$scope.file.name;
 		console.log($scope.iconname);
 		$scope.iconsize=($scope.file.size/1024).toFixed(2)+"kb";
 		console.log($scope.iconsize);
 	}




    //上线,暂存按钮
    $scope.dataup=function(){
    	var file=$("#file").get(0).files[0];
    	var img1=file.name;
    	console.log(file);
    	console.log(img1);
    	$http({
    		method:"POST",
    		url:"/carrots-admin-ajax/a/u/article",
    		params:{
    			title:$scope.title,
    			type:$scope.nowType,
    			status:'1',
    			img:img1,
    			content:$scope.content,
    			url:$scope.url,
    			industry:$scope.nowIndustry
    		}
    	}).then(function(rep){
    		$state.go('homepage.Article');
    		console.log('ok');
    		console.log(rep);
    	})	
    }
     $scope.datadown=function(){
    	var file=$("#file").get(0).files[0];
    	var img1=file.name;
    	var data=new FormData();
    	console.log(data);
    	console.log(file);
    	console.log(img1);
    	$http({
    		method:"POST",
    		url:"/carrots-admin-ajax/a/u/article",
    		params:{
    			title:$scope.title,
    			type:$scope.nowType,
    			status:'2',
    			img:img1,
    			content:$scope.content,
    			url:$scope.url,
    			industry:$scope.nowIndustry
    		}
    	}).then(function(rep){
    		$state.go('homepage.Article');
    		console.log('ok');
    		console.log(rep);
    	})	
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

	
console.log(file);

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