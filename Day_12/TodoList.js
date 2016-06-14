var app = angular.module("TodoApp",[]);

app.controller("MainCtrl",function ($scope) {
	$scope.newItem = "";
	$scope.Items=[];

 $scope.addItem = function(){
		$scope.Items.push($scope.newItem);
		$scope.newItem = " ";
	};

	$scope.deleteItem = function(i){
		$scope.Items.splice($scope.Items.indexOf(i),1); //deleting 1 item from the specific index inside the array
	};

});