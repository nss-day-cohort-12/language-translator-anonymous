var Translator = (function(initTrans){

  var germanLexicon = {
    merry: "fröhlich",
    christmas: "weihnachten",
    and: "und",
    happy: "glücklich",
    new: "neu",
    year: "jahr"
  };


  initTrans.toGerman = function (userText) {
    console.log("userText", userText);
    var germanString = userText.replace(/merry/g, germanLexicon.merry);
    germanString = germanString.replace(/christmas/g, germanLexicon.christmas);
    germanString = germanString.replace(/and/g, germanLexicon.and);
    germanString = germanString.replace(/happy/g, germanLexicon.happy);
    germanString = germanString.replace(/new/g, germanLexicon.new);
    germanString = germanString.replace(/year/g, germanLexicon.year);
    return germanString;
  }

return initTrans;
})(Translator);


var string = "william is cool"
console.log("string:", string);
string = string.replace(/william/g, "bill");
console.log("bill string:", string);