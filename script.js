//your code here
var data ="";
function addb(){
	var inputData = document.getElementById("newTodoInput").value;
    
	data +=inputData+"<br>";
	document.getElementById("todoList").innerHTML=data;
}




