
//Main Arrays and Ints for inputtings notes
var newShortNote = "";
var arrayOfRecords = [];
var id = 2;
var shortNotes = TAFFY([{id: 1, shortNote: "This is the first note in your system", hashtags: ["#first", "#microcrm"]}]);


//Vars for adding customers
var arrayOfCustomer = [];
var custId = 0;
var relatedNotes = "";

//Display and parse inputs

//List of Actions
var mainActions = function() {
	pullText();
	hashtagParse();
	displayNext();
	clearField();
	//showHashtags();
	incrementId();
}



//Pulls text from text field and adds to array
var pullText = function(){

	newShortNote = document.getElementById("inputField").value;
	shortNotes.insert({id: id, shortNote: newShortNote});


}


//Displays the next item in line including hashtags
var displayNext = function(){
	
	document.getElementById("demo").innerHTML += "<br>" + newShortNote;
}

//Clear the field when submit is pressed
var clearField = function (){
	document.getElementById("inputField").value = "";
}


//Parse entry for hashtags and stores
var hashtagParse = function() {

	var parse = newShortNote;
	var parseArray = parse.split(" ");
	//var hashtags = [];
		
		for(j = 0; j < parseArray.length; j++){
			
			if (parseArray[j][0] == "#"){

				shortNotes({id: id}).update({hashtags:[parseArray[j]]});

				//displays the hashtag without pulling info from the database
				document.getElementById("hashTags").innerHTML += "<br>" + parseArray[j];
			}

		}
		//need to add if else incase other hashtags already exist

		if (hashtags.length > 0 ){arrayOfRecords[id].hashtags = hashtags;}

}

//displays hashtags on screen - Turned off right now
var showHashtags = function() {

	var showHash = shortNotes().get();
	var addNewHash = showHash[id].hashtags[0];
	document.getElementById("hashTags").innerHTML += "<br>" + addNewHash;
}


var incrementId = function() {id++;}








//Adding New customer

//need to support multihashtags
var addCustomer = function (){
	arrayOfCustomer.push({customerId: custId, firstName: document.getElementById("firstname").value, lastName: document.getElementById("lastname").value, hashtags: document.getElementById("hashtags").value});

	custId++;
	clearCustomerFields();
}


var clearCustomerFields = function (){
	document.getElementById("firstname").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("hashtags").value = "";
	showCustomerInfo();
}


//view customer record
var showCustomerInfo = function (){
	document.getElementById("showfirstname").innerHTML += arrayOfCustomer[0].firstName;
	document.getElementById("showlastname").innerHTML += arrayOfCustomer[0].lastName;
	document.getElementById("showhashtags").innerHTML += arrayOfCustomer[0].hashtags;
}

//Searches all tweets for related hashtags then displays them.
var searchTweets = function (){

	for(j = 0; j < arrayOfRecords.length; j++){
		if (arrayOfRecords[j].hashtags[0] === arrayOfCustomer[0].hashtags){
			document.getElementById("showtweets").innerHTML += arrayOfRecords[j].tweet;
		}
	}

}


