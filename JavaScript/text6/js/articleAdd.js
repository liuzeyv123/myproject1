app.controller('articleAddCtrl',function($scope,$http,$state,$stateParams){
	
	 console.log($scope.nowType);
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
 // $scope.typeselect = [{
 //        id: null,
 //        name: "全部"
 //    }, {
 //        id: 0,
 //        name: "首页banner"
 //    }, {
 //        id: 1,
 //        name: "找职位banner"
 //    }, {
 //        id: 2,
 //        name: "找精英banner"
 //    }, {
 //        id: 3,
 //        name: "行业大图"
 //    }];