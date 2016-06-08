
function addToList (value) {
	var liElem = "<li>" + value + "</li>";
	$("#list").append(liElem);
	$('#todo-input').val('');
}




$( document ).ready(function() {

    $( "#todo-input" ).keyup(function(e) {
    	if (e.keyCode === 13) {
  			addToList($("#todo-input").val());
  		}
});
});

