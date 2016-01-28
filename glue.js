var Translator = (function() {
  return {}
})();

var execute = function (){
  //*** GET USER INPUT AND CREATE AN ARRAY ***//
  var userText = document.getElementById("textArea").value.toLowerCase();
  var userTextArray = userText.split(" ");
  console.log("User Input", userTextArray);
  
  //*** ACCESS DROPDOWN VALUE ***//
  var languageSelected = document.getElementById("selectLanguage").value
  

  //*** CAPITALIZE FIRST LETTER ***//
  //*** INSERT INTO DOM ***//
  var capFirstLetter = function (input) {
    input = finalTranslation.slice(0,1).toUpperCase() + finalTranslation.slice(1);
    document.getElementById("output").innerHTML = input;
  };

  //*** CHECK DROPDOWN AND RUN TRANSLATE FUNCTION ***//
  if (languageSelected === "French"){
    var finalTranslation = Translator.toFrench(userTextArray);
    console.log("finalTranslation", finalTranslation);
    capFirstLetter(finalTranslation);
    speakIt(finalTranslation, "fr");
    
  } else if (languageSelected === "German") {
    var finalTranslation = Translator.toGerman(userText);
    console.log("finalTranslation", finalTranslation);
    capFirstLetter(finalTranslation);
    speakIt(finalTranslation, "de");

  } else if (languageSelected === "Icelandic") {
    var finalTranslation = Translator.toIcelandic(userTextArray);
    console.log("finalTranslation", finalTranslation);
    capFirstLetter(finalTranslation);
    speakIt(finalTranslation, "is");

  } else {
    alert("Please Pick a language.")
  }
};

document.getElementById("tranlate_button").addEventListener("click", execute);

var clear = function() {
  console.log("anything");
  document.getElementById("textArea").value = "";
  document.getElementById("output").innerHTML = "";
}
document.getElementById("clear").addEventListener("click", clear);

// Speech Synthesis
function speakIt(textString, language) {
  var talk = new SpeechSynthesisUtterance();
  talk.lang = language;
  talk.text = textString;
  speechSynthesis.speak(talk);
}



