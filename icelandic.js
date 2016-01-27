var Translator = (function(trans) {

	var icelandicLexicon = {
		merry:"Gleðileg", 
		christmas:"jól", 
		and:"og", 
		happy:"hamingjusamur", 
		new:"ný", 
		year:"ári"
	};

	trans.toIcelandic = function (testArray) {
		var icelandicString = "";
		for (var i = 0; i < testArray.length; i++) {
			if (icelandicLexicon[testArray[i]]) {
				icelandicString += icelandicLexicon[testArray[i]];
				icelandicString += " ";
			} else {
				icelandicString += testArray[i];
				icelandicString += " ";
			}
		};
		return icelandicString;
	};
	
	return trans;
})(Translator);
