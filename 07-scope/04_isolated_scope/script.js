var app = angular.module("app",[])

app.controller('EditController', function($scope) {

});

app.directive('isolated', function() {
  return {
    scope: {
      message: '='
    },
    template: '<input ng-model="message.content"><span>{{message.content}}</span>'
  };
});
