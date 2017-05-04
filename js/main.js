
//Main Arrays and Ints
var arrayOfContact = [];
var arrayOfHashtags = [];
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

	arrayOfContact.push(" " + document.getElementById("inputField").value);
}


//Displays the next item in line including hashtags
var displayNext = function(){
	
	document.getElementById("demo").innerHTML += "<br>" + arrayOfContact[i];
	i++;
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