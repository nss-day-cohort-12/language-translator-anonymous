var Translator = (function(trans) {
  
  var frenchLexicon = {
    merry: "joyeux",
    christmas: "noel",
    and: "et",
    happy: "content",
    new: "neuf",
    year: "an"
  };

  trans.toFrench = function (userTextArray) {
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






// var Sedan = (function() {
//   var color = "blue";
//   var type = "sedan";

//   return {
//     manufacture_date: new Date(),
//     getColor: function() {
//       return color;
//     },
//     setColor: function(newColor) {
//       color = newColor;
//     },
//     getType: function() {
//       return type;
//     }
//   };
// })();