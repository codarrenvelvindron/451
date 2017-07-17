function listener(highlightInfo){
    chrome.browserAction.setIcon({
        path : "icons/icon_128.png"});
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){	
        var Url = tabs[0].url;
        var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4) {
		if (this.status == 451) {
		    chrome.browserAction.setIcon({
			path : "icons/451/icon_128.png"
		    });
		}
		else { //no censorship detected, do something
		}
	    }
	};
	
	xhttp.open("GET", Url, true);
	xhttp.send();
    });
}
chrome.tabs.onHighlighted.addListener(listener);
