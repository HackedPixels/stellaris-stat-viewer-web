function includeFiles() {
	var x = document.getElementsByClassName("include-file");
	for (var i = 0; i < x.length; i++) {
		readTextFile(x[i].dataset.file, includeFile, x[i].id)
	}
}

function includeFile(id, content) {
	document.getElementById(id).innerHTML = content;
}
