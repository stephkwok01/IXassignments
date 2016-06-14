var app = angular.module("AddressApp",[]);
var invalid=0;

app.controller("MainCtrl",function ($scope){
	$scope.newName = "";
	$scope.newNumber = "";
	$scope.nameSearch = "";
	$scope.person =[];
	$scope.numbers="";

	$scope.submit = function(){
	//validate name
		if ($scope.newName === "") {
			$scope.myName = "Please enter a name";
			invalid++;
		}
		else{
			$scope.myName="";
		}
	//validate number
		var numsplit = $scope.newNumber.split("-");
		if (numsplit.length !== 3){
			$scope.myNum = "Please enter a valid number XXX-XXX-XXXX";
			invalid++;
		}
		else if (numsplit[0].length !== 3 || numsplit[0] === NaN){
			$scope.myNum = "Please enter a valid number";
			invalid++;
		}
		else if (numsplit[1].length !==3 || numsplit[1] === NaN){
			$scope.myNum = "Please enter a valid number";
			invalid++;
		}
		else if (numsplit[2].length !==4 || numsplit[2] === NaN){
			$scope.myNum = "Please enter a valid number";
			invalid++;
		}
		else{
			$scope.myNum="";
		}
	//posting in contact list
		if (invalid === 0){
			$scope.person.push($scope.newName + " " + $scope.newNumber);
		}
		else {
			invalid = 0;
		}

		$scope.newName ="";
		$scope.newNumber ="";
	}
});




