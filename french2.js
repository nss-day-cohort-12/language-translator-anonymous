var Translator = (function(trans) {
  
  var frenchLexicon = {
    merry: "joyeux",
    christmas: "noel",
    and: "et",
    happy: "content",
    new: "neuf",
    year: "an"
  };

  trans.toFrench = function (userArray) {
    var translatedArray = [];

    userArray.forEach(function(currentIndex){
      if (frenchLexicon[currentIndex]) {
        translatedArray.push(frenchLexicon[currentIndex]);
      } else {
        translatedArray.push(currentIndex);
      }
    })
    var stringTranslatedArray = translatedArray.join(" ");
    return stringTranslatedArray;
  }

  return trans;
})(Translator);