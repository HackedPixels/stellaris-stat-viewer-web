function openTab(tabname) {
	var i;
	var x = document.getElementsByClassName("statpage");
	for(i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(tabname).style.display = "block";
}
openTab('overview');
