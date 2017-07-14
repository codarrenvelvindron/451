window.onload = function() {	
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	var Url = tabs[0].url
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			document.getElementById("Url").innerHTML =
				"Url: " + Url;
			document.getElementById("statuscode").innerHTML =
				"http status code: " + this.status;
	      document.getElementById("statustext").innerHTML =
			  "http status text: " + this.statusText;
			if (this.status == 451){
				//if error 451, display status
				document.getElementById("detect").innerHTML =
					"Censorship detected : Error 451";}
			else {
				document.getElementById("detect").innerHTML =
					"No censorship detected :" + Url + " responded with " + this.status;	
			}
		}//end of readystate
	};//end of onready
	xhttp.open("GET", Url, true);
	xhttp.send();
});//end of chrome.tabs.query
}//end of window.onload