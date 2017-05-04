
//Main Arrays and Ints
var mainTweet = "";
var hashtags = [];
var arrayOfRecords = [];
var i = 0;
var record = function(id, tweet, hashtag){
			this.id = 0;
			this.tweet = "";
			this.hashtag = "";

}




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
	arrayOfRecords.push( {id: i, tweet: mainTweet, hashtag: hashtags} ) ;
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

	var parse = document.getElementById("inputField").value;
	var parseArray = parse.split(" ");
		
		for(j = 0; j < parseArray.length; j++){
			
			if (parseArray[j][0] == "#"){

				arrayOfHashtags.push(parseArray[j]);
				document.getElementById("hashTags").innerHTML += "<br>" + arrayOfHashtags[arrayOfHashtags.length - 1];
			}

		}	
}