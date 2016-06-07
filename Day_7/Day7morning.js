// window.onload = function() {
	// console.log the values of First Name and Last Name 
	function getFormValues() {  
		var firstname = document.getElementById("form1").fname.value;
		var lastname = document.getElementById("form1").lname.value;
		console.log(firstname + " " + lastname);
	}

	// Change the color of the div with id "color-div"
	function changeColor() {
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		var text = document.getElementById("color-div");
		text.style.color = randomColor;
	}

// }