window.onload = function() {
chrome.storage.local.get("Urls", function(items) {
var none = "None"
n=0;
var n = none.localeCompare(items.Urls);

	if (n == 0) {
		document.getElementById("detect").textContent = "No censorship detected!";
	}
	else if (n == -1){
		document.getElementById("detect").textContent = "Invalid test page!";
	}
	else {
		document.getElementById("detect").style.color="red";
		document.getElementById("detect").textContent = "Censorship Detected on: " + items.Urls;
}
});
}
