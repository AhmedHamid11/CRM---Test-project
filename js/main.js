
//Main Arrays and Ints for inputtings notes
var mainTweet = "";
var arrayOfRecords = [];
var id = 0;

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
}



//Pulls text from text field and adds to array
var pullText = function(){

	mainTweet = document.getElementById("inputField").value;
	arrayOfRecords.push( {id: id, tweet: mainTweet} ) ;
}


//Displays the next item in line including hashtags
var displayNext = function(){
	
	document.getElementById("demo").innerHTML += "<br>" + mainTweet;
}

//Clear the field when submit is pressed
var clearField = function (){
	document.getElementById("inputField").value = "";
}


//Parse entry for hashtags
var hashtagParse = function() {

	var parse = arrayOfRecords[id].tweet;
	var parseArray = parse.split(" ");
	var hashtags = [];
		
		for(j = 0; j < parseArray.length; j++){
			
			if (parseArray[j][0] == "#"){

				hashtags.push(parseArray[j]);
				document.getElementById("hashTags").innerHTML += "<br>" + hashtags[hashtags.length - 1];
			}

		}
		//need to add if else incase other hashtags already exist

		if (hashtags.length > 0 ){arrayOfRecords[id].hashtags = hashtags;}
		id++;
}





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
	searchTweets();
}

//need to build in search
var searchTweets = function (){

	for(j = 0; j < arrayOfRecords.length; j++){
		if (arrayOfRecords[j].hashtags[0] === arrayOfCustomer[0].hashtags){
			document.getElementById("showtweets").innerHTML += arrayOfRecords[j].tweet;
		}
	}

}


