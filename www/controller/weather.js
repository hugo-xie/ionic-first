angular.module('App')
.controller('weatherController', ['$scope','$http','$ionicLoading', function($scope,$http,$ionicLoading){
  $ionicLoading.show();
  $http.get('https://ionic-in-action-api.herokuapp.com/weather')
  .success(function(weather){
    $scope.weather =weather;
    $ionicLoading.hide();
  })
  .error(function(err){
    console.log(err);
  })
}])