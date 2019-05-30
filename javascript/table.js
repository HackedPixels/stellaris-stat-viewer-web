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

function charCount(text, c) {
	var nLines = 0;
	for (var i = 0, n = text.length ; i < n; i++) {
		if (text[i] === c) {
			nLines++;
		}
	}
	return nLines;
}

var visibleTable = "overview";
var x = document.getElementsByClassName("w3-table");
for (var i = 0; i < x.length; i++) {
	var content = readTextFile(x[i].dataset.file).split("\n");
	var rowcontent;

	for (var j = 0; j < content.length; j++) {
		rowcontent = content[j].split(",");
		var row = x[i].insertRow(x[i].rows.length);

		for (var k = 0; k < rowcontent.length; k++) {
			row.insertCell(row.length).innerHTML = rowcontent[k];
		}
	}
}
