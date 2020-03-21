function loadJSON() {
	var data_file = "https://cors-anywhere.herokuapp.com/http://reg.bom.gov.au/fwo/IDW60901/IDW60901.94610.json";
	var http_request = new XMLHttpRequest();
	

	http_request.onreadystatechange = function() {

		if (http_request.readyState == 4) {
			// Javascript function JSON.parse to parse JSON data
			var jsonObj = JSON.parse(http_request.responseText);

			// jsonObj variable now contains the data structure and can
			// be accessed as jsonObj.name and jsonObj.country.
			document.getElementById("name").innerHTML = jsonObj.observations.data[0].name;
			document.getElementById("air_temp").innerHTML = jsonObj.observations.data[0].air_temp;
		}
	}

	http_request.open("GET", data_file, true);
	http_request.setRequestHeader("X-Requested-With","XMLHttpRequest");
   http_request.send();
}