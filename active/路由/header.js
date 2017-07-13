route.directive('rHeader',[function(){
    return{
        restrict:'AE',
        transclude:true,
        scope:true,
        controller:function($scope){
            $scope.cates=['首页','耳机','我的']
        },
        templateUrl:'header.html ',
        replace:true,
        link:function (scope,el) {
            
        }
    }
}])