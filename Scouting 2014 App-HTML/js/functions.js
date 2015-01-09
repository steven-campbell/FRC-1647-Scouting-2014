function getEvents(year) {
	// throws an error if required parameters not supplied
	if(year === null) {
		console.error("loadEvents(year): supply a year");
		return -1;
	}

	// calls the Blue Alliance API for competitions
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'http://www.thebluealliance.com/api/v2/events/' + year + '?X-TBA-App-Id=FRC1647:2014-scouting:v01', false);
	ajax.send(null);

	// saves list of events to local storage
	localStorage.allEvents = ajax.responseText;
}

function addPersonalization() {
	$('#AppName').html(localStorage.teamOrAppName);
	$('#CompName').html(localStorage.competition);
}