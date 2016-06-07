// change the color of the text in the div with class "color-div" to red
function changeColor() {
	$(".color-div").css("color", "red");
}

// add the word "blue" to the div with class "add-div"
function addToDiv() {
	$(".add-div").append("blue");
}

// add a title to the page
function addTitle() {
	$(".title-div").append("RANDOM TITLE").css("color","green");
}

// alert the text in the selected item of the dropdown
function getSelected() {
	$("#selector").text();
	alert($("#selector option:selected").val());
}

// change the title to be "New Title"
function changeText() {
	$(".title-div").text("NEW TITLE");
}

$(document).ready(function() {
	addToDiv();
	addTitle();

  $('.the-button').click(function(){ 
    //hint: what goes in here?
    changeColor();
	});

$('.get-selected').click(function(){
	alert($("#selector option:selected").val());
})

$(".text-changer").click(function(){
	changeText();
})

  $(".trio").click(function (e) {
    //hint: look at the currentTarget property
    $(".clicked-id").html("you clicked on id:" + $(this).attr("id"));
  });

});




