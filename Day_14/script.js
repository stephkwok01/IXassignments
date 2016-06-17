var app = angular.module("ChommiesApp", ["ngRoute"]);
var CHOMMIES_TOKEN = "2b42a25eb36ba57186df47a5a4f3927e";

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/me", {
    templateUrl: "templates/me.html"
  })
});


app.controller("FeedCtrl", function($scope, $http, $window) {
  var url = "http://ixchommies.herokuapp.com/";
  $http({
    method: "GET",
    url: url + "brus",
    params: { token: "2b42a25eb36ba57186df47a5a4f3927e" }
  }).then(function(response) {
    $scope.brus = response.data;
  });

  $http({
    method: "GET",
    url: url + "props",
    params: { token: "2b42a25eb36ba57186df47a5a4f3927e" }
  }).then(function(response) {
    $scope.props = response.data;
  });

  $scope.addProp = function() {
    $http({
      method: "POST",
      url: url + "props",
      params: { token: "2b42a25eb36ba57186df47a5a4f3927e" },
      data: {
        props: $scope.newProp.text,
        for: $scope.newProp.receiver.id,
      }
    }).then(function(response) {
       $scope.newProp = {};
    }).catch(function(response) {
      // Handle error here
      $scope.error=response.data.message; 
    });
  }
  $scope.refresh = function(){
    $window.location.reload();
  }
});

app.controller("meCtrl", function($scope, $http) {
  $http({
    method:"GET",
    url: url + "props/me",
    params:{ token: "2b42a25eb36ba57186df47a5a4f3927e"},
  }).then(function(response){
    $scope.me=response.data;
  });

});












