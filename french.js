var Translator = (function(trans) {
  
  var frenchLexicon = {
    merry: "joyeux",
    christmas: "noel",
    and: "et",
    happy: "content",
    new: "neuf",
    year: "an"
  };

  trans.toFrench = function (input) {
    var frenchString = "";
    for (var i = 0; i < input.length; i++) {
      if (frenchLexicon[input[i]]) {
        frenchString += frenchLexicon[input[i]];
        frenchString += " ";
      } else {
        frenchString += input[i];
        frenchString += " ";
      }
    };
    return frenchString;
  };
  
  return trans;
})(Translator);


