var app = angular.module("app",[])

app.controller('MainController', function($scope) {
  $scope.reverseWord = function() {
    console.log('here')
    var word = $scope.word
    console.log(word)
    var wordLength = word.length;
    var result = '';
    for (var i=0; i<wordLength; i++) {
      result += word[wordlength-i];
    }
    $scope.word = result;
  }
});
