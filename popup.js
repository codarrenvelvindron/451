window.onload = function() {	
	function handleClick(){ //if button is clicked, do stuff here
		var Url = document.getElementById("tUrl").value;
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
    "Censorship detected : Error 451";
	}
	else {
	document.getElementById("detect").innerHTML =
    "No censorship detected :" + Url + " responded with " + this.status;	
	}
	
  }
};
xhttp.open("GET", Url, true);
xhttp.send();
};//end of handleClick
	document.getElementById("btnCheck").addEventListener("click",handleClick);
}//end of window.onload
