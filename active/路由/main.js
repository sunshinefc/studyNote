var route=angular.module('route',['ngRoute']);
route.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'a.html',
        controller:'aCtrl'
    }).when('/b',{
        templateUrl:'b.html',
        controller:'bCtrl'
    })
}])
route.controller('mainCtrl',['$scope',function(scope){
    // $scope.cates=['首页','耳机','我的'];

}])
route.directive('lunbo',[function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'lunbo.html',
        scope:{
            set:"=",
            interval:'='
        },
        link:function (scope,el) {
            var slider=$(el).find('.lunbo-inner');
            var index=0;
            if(!scope.interval){
                scope.interval=1000;
            }
            setInterval(function(){
                slider.css({
                    marginLeft:-300*index
                })
                index++;
                if(index==scope.set.length){
                    index=0;
                }
            },scope.interval)
            /*var slider=$(el).find('.lunbo-inner')*/
        }
        
    }
}])

