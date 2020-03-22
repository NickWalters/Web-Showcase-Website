function myMove() {
	var elem = document.getElementById("animate");   
	var pos = 0;
	var id = setInterval(frame, 5);
	function frame() {
		if (pos == 350) {
			clearInterval(id);
		} else {
			pos++; 
			elem.style.top = pos + "px"; 
			elem.style.left = pos + "px"; 
		}
	}
}
// using DOM Request to remove the animation/child
function removeAnimation(){
	var element = document.getElementById("container");
	element.removeChild(element.childNodes[0]);
}