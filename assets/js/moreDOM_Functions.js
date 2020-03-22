function changeText(){
	var text = "HELLOOOOO !!!  WHAT DID YOU DO TO ME?? YOU CHANGED MY TEXT BY CLICKING THAT BUTTON !!  YOU ALSO CHANGED MY COLOUR TO RED WITH YOUR MOUSE ?! DONT FIDDLE AROUND WITH MY STRUCTURAL INTEGRITY TOO MUCH!!!";
	document.getElementById("textToChange").innerHTML = text; 
}


function changeTextColour(){
	document.getElementById("textToChange").style.color = "red";
}

function displayDate() {
	document.getElementById("dateArea").innerHTML = Date();
}

function formValidationExample1() {
	var x, text;

	// Get the value of the input field with id="numb"
	x = document.getElementById("numb").value;

	// If x is Not a Number or less than one or greater than 10
	if (isNaN(x) || x < 1 || x > 300) {
		text = "Input not valid";
	} else {
		text = "Input OK";
	}
	document.getElementById("thatText").innerHTML = text;
	
}

