window.onload = function() {
chrome.storage.local.get("Urls", function(items) {
	window.alert(typeof items.Urls);
	if (items.Urls == "None") {
		document.getElementByID("detect").innerHTML = items.Urls;
	}
	else {
		document.getElementById("detect").innerHTML = "Censorship Status: " + items.Urls;
}
});
}