var chickens = document.getElementById("chicken").style.display = "none";

function searchTable() {
	var input = document.getElementById("searchInput");
	var filter = input.value.toUpperCase();
	var table = document.getElementById(visibleTable);

	var tr = table.getElementsByTagName("tr");
	var td, txtValue;
	var visible = 0;

	for (var i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
				visible++;
			} else {
				tr[i].style.display = "none";
			}
		}
	}

	var chickens = document.getElementById("chicken")
	if (visible === 0) {
		chickens.style.display = "";
	} else {
		chickens.style.display = "none";
	}
}
