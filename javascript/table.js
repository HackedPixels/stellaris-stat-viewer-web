function setTableContent(tablename, tcontent) {
//	var x = document.getElementsByClassName("w3-table");
	var x = document.getElementById(tablename);
//	for (var i = 0; i < x.length; i++) {
//	var content = readTextFile(x[i].dataset.file).split("\n");
	var content = tcontent.split("\n");
	var rowcontent;

	for (var j = 0; j < content.length; j++) {
		rowcontent = content[j].split(",");
		var row = x.insertRow(x.rows.length);

		for (var k = 0; k < rowcontent.length; k++) {
			row.insertCell(row.length).innerHTML = rowcontent[k];
		}
	}
//	}
}

function readTextFile(file, callback, id)
{
	var rawFile = new XMLHttpRequest();
	rawFile.responseType = "text";
	rawFile.open("GET", file, true);
	rawFile.send(null);
	rawFile.onload = function(e) {
		callback(id, rawFile.responseText);
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

var tables = document.getElementsByClassName("w3-table");
for (var i = 0; i < tables.length; i++) {
	readTextFile(tables[i].dataset.file, setTableContent, tables[i].id);
}
