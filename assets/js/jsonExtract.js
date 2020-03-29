/* According to the AJAX model, web applications can send and retrieve data from a server asynchronously without interfering with the display and the behavior of the existing page. 

	AJAX is used so that javascript can retrieve these JSON files when necessary, parse them, and perform one of the following operations −

			--- Store the parsed values in the variables for further processing before displaying them on the webpage.

			--- It directly assigns the data to the DOM elements in the webpage, so that they are displayed on the website.
*/

function loadJSON() {
	// we don't own the JSON URL that we want to extract from, so we must use a 'CORS' proxy added onto our target URL and store it.
	var data_file = "https://cors-anywhere.herokuapp.com/http://reg.bom.gov.au/fwo/IDW60901/IDW60901.94610.json";
	// make URL request
	var http_request = new XMLHttpRequest();
	
	// run this function after a URL Request is made/updated
	http_request.onreadystatechange = function() {

		if (http_request.readyState == 4) {
			// Javascript function JSON.parse to parse JSON data
			var jsonObj = JSON.parse(http_request.responseText);

			// jsonObj variable now contains the data structure and can
			// be accessed as jsonObj.name and jsonObj.air_temp
			document.getElementById("name").innerHTML = jsonObj.observations.data[0].name;
			document.getElementById("air_temp").innerHTML = jsonObj.observations.data[0].air_temp;
			document.getElementById("local_date_time").innerHTML = 
				jsonObj.observations.data[0].local_date_time;
		}
	}
	// use 'GET' to extract/recieve data from URL
	http_request.open("GET", data_file, true);
	http_request.setRequestHeader("X-Requested-With","XMLHttpRequest");
   http_request.send();
}