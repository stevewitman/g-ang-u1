var app = angular.module("app",[])

app.controller('HelloController', function($scope) {
  $scope.message = 'Hello World!';
});

app.controller('GoodbyeController', function($scope) {
  $scope.message = 'Goodbye World!';
});
