$(document).ready(function() {
	var clickCount = 1; //change this strategically!

	$(".grid-box").click(function(e) {
		var clickedID = e.currentTarget.id; //the id of the box that was clicked.
		//fill in stuff HERE!
		if (clickCount % 2 === 0) {
			$("#"+clickedID).text("X");
		}
		else {
			$("#"+clickedID).text("O");
		}
		clickCount ++;
	});
});