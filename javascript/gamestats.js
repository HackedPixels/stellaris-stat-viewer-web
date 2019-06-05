function loadGamestats(username) {
	readTextFile("data/users/" + username, setGamestats, username);
}

function unloadGamestats(username) {
	var gamestateList = document.getElementById("gamestates1");
	gamestateList.innerHTML = "";
}

function setGamestats(user, stats) {
	var content = stats.split("\n");
	var gamestateList = document.getElementById("gamestates1");

	for (var i = 0; i < content.length; i++) {
		if (content[i].length > 0) {
			gamestateList.innerHTML += '<a href="javascript:void(0)" class="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey" onclick="showGamestateTable();loadTables(\'' + content[i].trim() + '\');w3_close();" id="firstTab"><div class="w3-container"><span class="w3-opacity w3-large">' + content[i] + '</span><h6>17.01.2018</h6></div></a>';
		}
	}
}
