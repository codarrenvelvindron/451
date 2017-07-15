function listener(highlightInfo){
chrome.browserAction.setIcon({
path : "icons/icon_128.png"});
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){	
var Url = tabs[0].url
	//window.alert(Url);
var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 451){
				//if error 451, display status
				chrome.browserAction.setIcon({
					path : "icons/451/icon_128.png"
				});
				;}//endif this.status
			else {
				//no censorship detected
			}
			}//end of readystate
	};//end of onready
	
	xhttp.open("GET", Url, true);
	xhttp.send();
});//end of chrome.tabs.query
}//end of function listener
chrome.tabs.onHighlighted.addListener(listener);