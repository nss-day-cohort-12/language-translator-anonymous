var Translator = (function(trans) {

	var icelandicLexicon = {
		merry:"gleðileg", 
		christmas:"jól", 
		and:"og", 
		happy:"hamingjusamur", 
		new:"ný", 
		year:"ári"
	};

	trans.toIcelandic = function (engWords) {
		var icelandicString = "";
		for (var i = 0; i < engWords.length; i++) {
			if (icelandicLexicon[engWords[i]]) {
				icelandicString += icelandicLexicon[engWords[i]];
				icelandicString += " ";
			} else {
				icelandicString += engWords[i];
				icelandicString += " ";
			}
		};
		return icelandicString;
	};
	
	return trans;
})(Translator);
