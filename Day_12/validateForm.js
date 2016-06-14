var app = angular.module("validateApp",[]);
var invalid = 0;

app.controller("MainCtrl",function ($scope) {
	$scope.newName ="";
	$scope.newNumber ="";
	$scope.newEmail="";
	$scope.newPassword ="";
	$scope.repeatPassword ="";

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
			$scope.myNum = "Please enter a valid number";
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

	//validate Email
		var emailsplit = $scope.newEmail.split("@");
		if (emailsplit.length !== 2) {
			$scope.myEmail = "Please enter a valid email";
			invalid++;
		} 
		else {
			var emaillast = emailsplit[1].split(".");
			if (emaillast.length !== 2) {
			$scope.myEmail = "Please enter a valid email";
			invalid++;
			}
			else{
				$scope.myEmail="";
			}
		}

	//validate password
		if ($scope.newPassword.length < 7){
			$scope.myPassword = "Password too short";
			invalid++;
		}
		else{
			$scope.myPassword="";
		}
	//repeat password
		if ($scope.repeatPassword !== $scope.newPassword){
			$scope.repeat = "Please enter the same password as above";
			invalid++;
		}
		else{
			$scope.repeat="";
		}

		if (invalid === 0){
			$scope.successful = "welcome " + $scope.newName;
		}

		$scope.newName ="";
		$scope.newNumber ="";
		$scope.newEmail="";
		$scope.newPassword="";
		$scope.repeatPassword="";
	}
});













