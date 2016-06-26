var app = angular.module("app",[])

app.controller('EditController', function($scope) {
  $scope.userIsAdmin = true;
  $scope.message = {
    content: 'Redact me'
  };
});
