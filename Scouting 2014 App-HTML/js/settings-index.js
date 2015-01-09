function addEventsToDOM() {
	// get JSON from response
	var events = JSON.parse(localStorage.allEvents);

	// put events in date order
	events.sort(start_date_sort);

	// remove old options
	$('#settings-events').find('option').remove().end().append('<option>Choose One...</option>');

	// send to page
	for(var i = 0, j = events.length; i < j; i++) {
		if(Date.parse(events[i].start_date) != Date.parse(events[i].end_date)) {
			$('#settings-events').append($('<option value=' + events[i].key + '>' + events[i].name + ' | ' + events[i].start_date + ' through ' + events[i].end_date + '</option>'))
		} else {
			$('#settings-events').append($('<option value=' + events[i].key + '>' + events[i].name + ' | ' + events[i].start_date + '</option>'))		
		}
	}
}

function start_date_sort(a, b) {
	// a sort function to be utilized by JS's built in sort function
	if(a.start_date > b.start_date) return 1;
	if(a.start_date < b.start_date) return -1;
	return 0;
}

function saveSettings() {
	// save name to localStorage
	localStorage.teamOrAppName = $('#settings-teamname').val();

	// save competition to localStorage
	localStorage.competition = $('#settings-events').val();
}

function addPersonalizationToSettings() {
	// change fields to the saved settings
	$('#settings-teamname').val(localStorage.teamOrAppName);
	$('#settings-events').val(localStorage.competition);
}