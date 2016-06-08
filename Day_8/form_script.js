function phoneValidator(phoneNum){
	var numsplit = phoneNum.split("-");
	if (numsplit.length !== 3){
		$("#message").text("phone not valid");
		return;
	}
	else if (numsplit[0].length !==3 || numsplit[0] === NaN) {
		$("#message").text("phone not valid");	
		return;
	}

	else if (numsplit[1].length !==3 || numsplit[1] === NaN) {
		$("#message").text("phone not valid");	
		return;
	}

	else if (numsplit[2].length !==4 || numsplit[2] === NaN) {
		$("#message").text("phone not valid");	
		return;
	}

	else{
		$("#message").text("phone valid");	
		return;
	}
}

function emailValidator(email){
	var emailsplit = email.split("@");
	if (emailsplit.length !== 2) {
		$("#message2").text("email not valid");
		return;
	} 
	var emaillast = emailsplit[1].split(".");
	if (emaillast.length !== 2) {
		$("#message2").text("email not valid");
		return;
	}
	else {
		$("#message2").text("email valid");
	}
}



$(document).ready(function() {

	$("#submit-btn").click(function(){
		var phoneNum = $("#phone").val();
		var email = $("#email").val();
		phoneValidator(phoneNum);
		emailValidator(email);
	})


})