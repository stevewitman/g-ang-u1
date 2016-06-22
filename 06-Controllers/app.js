var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
  $scope.name = "Michael"
});

app.controller("exercisesController", function($scope) {
  $scope.favColor = "red";
  $scope.secondsInACentury = 60*60*24*365*100;
  $scope.rightNow = Date.now();
});

app.controller("madLibController", function($scope) {
  $scope.showMadLib = false;
  $scope.myFunc = function() {
    $scope.field_1 = $scope.field1;
    $scope.field_2 = $scope.field2;
    $scope.field_3 = $scope.field3;
    $scope.field_4 = $scope.field4;
    $scope.showMadLib = true;
  };
  $scope.clearForm = function() {
    $scope.field1 = '';
    $scope.field2 = '';
    $scope.field3 = '';
    $scope.field4 = '';
    $scope.showMadLib = false;
  }


});
