

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var completeAlphabet = alphabet.concat(numbers);


var randomLetters = function(chars,length){
	 var result = '';
	 if(typeof length === 'number'){
	  for (var i = length; i > 0; --i){
		    	result += chars[Math.round(Math.random() * (chars.length - 1))];	
		 } 
     }
     return result;
};

module.exports = {
   randomString: function(length){ 
   	var result  = '';
          result = randomLetters(alphabet,length);
	    return result;
   }, 

    randomStringWithNumbers: function(length, withNumbers){
    	 var result = '';
        if (withNumbers === true || withNumbers === undefined){
        	result = randomLetters(completeAlphabet,length);
        }else{
        	result = randomLetters(alphabet,length);
        }
      
	    return result;
   } 

};