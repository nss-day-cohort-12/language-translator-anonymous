var Translator = (function(trans) {

	var icelandicLexicon = {
		merry:"Gleðileg", 
		christmas:"jól", 
		and:"og", 
		happy:"hamingjusamur", 
		new:"ný", 
		year:"ári"
	};

// This will be created in glue.js and
// passed to Translator.toIcelandic.
	var testArray2 = [
		"Hello",
		"I'm",
		"American",
		"merry",
		"christmas",
		"and",
		"happy",
		"new",
		"year",
		"sucker"
	];

	trans.toIcelandic = function (testArray) {
		var icelandicString = "";
		for (var i = 0; i < testArray2.length; i++) {
			if (icelandicLexicon[testArray2[i]]) {
				icelandicString += icelandicLexicon[testArray2[i]];
				icelandicString += " ";
			} else {
				icelandicString += testArray2[i];
				icelandicString += " ";
			}
		};
		return icelandicString;
	};
	
	return trans;
})(Translator);
