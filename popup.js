window.onload = function() {
chrome.browserAction.setIcon({
path : "icons/icon_128.png"});
	
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	var Url = tabs[0].url
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			document.getElementById("Url").innerHTML =
				"Url: " + Url;
			document.getElementById("statuscode").innerHTML =
				"http status code: " + this.status;
			if (this.status == 451){
				//if error 451, display status
				document.getElementById("detect").innerHTML =
					"Censorship detected : Error 451"
				chrome.browserAction.setIcon({
					path : "icons/451/icon_128.png"
				});
				;}//endif this.status
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