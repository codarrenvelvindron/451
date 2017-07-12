window.onload = function() {	
	function handleClick(){
		var Url = document.getElementById("tUrl").value;
	//when button is clicked, do stuff here
//window.alert(Url);
		var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4) {
	    document.getElementById("Url").innerHTML =
    "Url: " + Url;
    document.getElementById("statuscode").innerHTML =
    "http status code: " + this.status;
	      document.getElementById("statustext").innerHTML =
    "http status text: " + this.statusText;
  }
};
xhttp.open("GET", Url, true);
xhttp.send();
};
	document.getElementById("btnCheck").addEventListener("click",handleClick);
}
