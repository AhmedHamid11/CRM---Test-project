
//Main Arrays and Ints
var mainTweet = "";
var arrayOfRecords = [];
var id = 0;




//List of Actions
var mainActions = function() {
	pullText();
	//hashtagParse();
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
		//bug, all protos have all hashtags

		//if (hashtags.length > 0 ){arrayOfRecords[id].hashtags = hashtags;}
		id++;
}