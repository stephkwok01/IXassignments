var app = angular.module("ChommiesApp", ["ngRoute", "firebase"]);
var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});


app.controller("FeedCtrl", function($scope, $http, $firebaseArray, $timeout) {
  var propRef = firebase.database().ref().child("props");
  var bruRef = firebase.database().ref().child("brus");
  $scope.props = $firebaseArray(propRef);
  $scope.brus = $firebaseArray(bruRef);
  $scope.newProp = {};


  $scope.addProp = function() {
    $scope.successMessage = "";
    $scope.errorMessage = "";
    if ($scope.newProp.text && $scope.newProp.receiver) {
      console.log($scope.newProp);
      //make sure sentiment is positive
      $http({
        method:"POST",
        url: "https://twinword-sentiment-analysis.p.mashape.com/analyze/",
        headers:{"X-Mashape-Key": "PbStp7XTqcmshozwb4sA09AZRaTEp1qKVYHjsnE0LcKWj66qWd",
        "Accept": "application/json", },
        data: "text=" + $scope.newProp.text,
      }).then(function(response){
        console.log(response);
      })

      $scope.props.$add($scope.newProp);
      $scope.newProp = {};
      $scope.successMessage = "Nice! You contributed to the positivity of the world."
      $timeout(function() {
        $scope.successMessage = "";
      }, 3000);
    } else {
      $scope.errorMessage = "Please make sure to choose a receiver, and add some positive text!"
    }
  }
});




