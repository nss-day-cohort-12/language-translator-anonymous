var Translator = (function(trans) {

	var germanLexicon = {
		merry: "fröhlich",
		christmas: "weihnachten",
		and: "und",
		happy: "glücklich",
		new: "neu",
		year: "jahr"
	};

	trans.toGerman = function (testArray) {
		var germanString = "";
		for (var i = 0; i < testArray.length; i++) {
			if (germanLexicon[testArray[i]]) {
				germanString += germanLexicon[testArray[i]];
				germanString += " ";
			} else {
				germanString += testArray[i];
				germanString += " ";
			}
		};
		return germanString;
	};
	
	return trans;
})(Translator);