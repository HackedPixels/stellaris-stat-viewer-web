function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.send(null);
	if(rawFile.status === 200 || rawFile.status == 0)
	{
		var allText = rawFile.responseText;
		return allText;
	}
}

function lineCount(text) {
	var nLines = 0;
	for (var i = 0, n = text.length ; i < n; i++) {
		if (text[i] === '\n') {
			nLines++;
		}
	}
	return nLines;
}

var x = document.getElementsByClassName("w3-table");
for (var i = 0; i < x.length; i++) {
	var content = readTextFile("https://raw.githubusercontent.com/ArdiMaster/stellaris-stat-viewer/master/.gitignore").split("\n");

	for (var j = 0; j < content.length; j++) {
		var row = x[i].insertRow(x[i].rows.length);
		row.insertCell(row.length).innerHTML = content[j];
	}
}
