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
  $scope.myFunc = function(f1,f2,f3,f4) {
    $scope.field_1 = f1;
    $scope.field_2 = f2;
    $scope.field_3 = f3;
    $scope.field_4 = f4;
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
