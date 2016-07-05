var app = angular.module("app",[])

app.controller('MainController', function($scope) {
  $scope.view = {};
  $scope.view.number = 5;
  $scope.pickRandomNumber = function() {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
});
