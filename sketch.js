
//Oryan Inbar A2Z ITP 2015
//Internet time travel
//live site: http://oryano.github.io/Time-travel/

//documentation for the API used (internet archive)
//https://archive.org/help/wayback_api.php


var input;  // Input from users
var todayDate;	//Todays date

function setup(){
	noCanvas();

	//select the input from HTML
	input = select('#search');
	//select the button fromHTML
	var button = select('#submit');
	//attach a callback to button press
	button.mousePressed(search); //when clicking on button call search function (see below)
}


//bulid URL based on search to use in the API
function search(){
	var websiteToSearch = input.value();  //format name.com

	var firstTimeStamp = 19990508; //the oldest date will throw back oldest archived
	
	//url to return JSON for querying availabel on the Archive
	var url = 'http://archive.org/wayback/available?url=' + websiteToSearch + '&timestamp=' + firstTimeStamp;  //'http://archive.org/wayback/available?url=' + websiteToSearch;
	
	//query the url, set callback, make sure its jsonp? (for security)
	loadJSON(url, gotData, 'jsonp');

}

//data received and displayed
function gotData(data){
	var archive = data;  //bc the whole JSON obj is a "closest" to today
	console.log(archive);

	if (archive.archived_snapshots.closest.available === true){ //Check if url is archived and currenlty accessible
		console.log('this site is in the archive');
		
		turnOnbuttons(); //turn on fwe bck buttons

		var urlInFrame = archive.archived_snapshots.closest.url;
		//select iframe to change src
		//var iframe = select('#frame');
		//iframe.setAttribute('src', 'http://www.w3schools.com/jsref/met_element_setattribute.asp');
		//only this works...
		document.getElementById("frame").setAttribute("src", urlInFrame);
		console.log(urlInFrame);

	} else {
		createElement('h1', 'Cannot send you back in time to that website'); //doesnt work
		console.log('this site is not archived'); //doesnt work
	}
}

function turnOnbuttons(){

	// var yearButtons = select('#yearButtons'); //select the buttons div
	// yearButtons.setAttribute('opacity', 1);
	document.getElementById("yearButtons").setAttribute("opacity", '0.2');

	//make functionality for buttons

}

		// var regName = /www\.(\w+)/; ///(?:https?:\/\/)?([(?!archive)\da-z\.-]+)\.(?:[a-z\.]{2,6})(?:[\/\w \.-]*)*\/?/;///\w+\.(\w+).\w+\/$/;   ///http:\/\/\w+\.(\w+)\.\w+\/"/;  // /http:\/\/(\w+.com)\/$/;  //match to name inside url
		// var extractUrl = archive.archived_snapshots.closest.url.match(regName);     //to find the name of site in the url
		// var name = extractUrl[1];		
		// console.log(extractUrl); //results from regex
		// console.log(name);






// var date = archive.archived_snapshots.closest.timestamp.match(regDate);   //to find the date of site in the url
// var regDate = /^(\d{4})(\d{2})(\d{2})/;   //match date in normal format
// if (date[2] == 1) monthName = 'Jan';
// 	else if (date[2] == 2) monthName = 'Feb';
// 	else if (date[2] == 3) monthName = 'Mar';
// 	else if (date[2] == 4) monthName = 'Apr';
// 	else if (date[2] == 5) monthName = 'May';
// 	else if (date[2] == 6) monthName = 'Jun';
// 	else if (date[2] == 7) monthName = 'Jul';
// 	else if (date[2] == 8) monthName = 'Aug';
// 	else if (date[2] == 9) monthName = 'Sep';
// 	else if (date[2] == 10) monthName = 'Oct';
// 	else if (date[2] == 11) monthName = 'Nov';
// 	else if (date[2] == 12) monthName = 'Dec';
// 	createElement('h3', 'Most recent version from: '+monthName +' '+ date[3] +'th, '+ date[1]);	  //add the date

// 	//display link to archive at the chosen website
// 	var link = 'http://web.archive.org/web/*/' + name;
// 	createA(link, name + '.com');   //render to page


// 	//get the date of today
// 	todayDate = new Date();
// 	var yyyy = todayDate.getFullYear();
// 	var mm = todayDate.getMonth();
// 	var dd = todayDate.getDate();
// 	console.log(dd+' '+mm+' '+yyyy);

