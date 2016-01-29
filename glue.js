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
  document.getElementById("textArea").value = "";
  document.getElementById("output").innerHTML = "";
}
document.getElementById("clear").addEventListener("click", clear);




// Speech Synthesis //
var talk = new SpeechSynthesisUtterance();

function speakIt(textString, language) {
  talk.lang = language;
  talk.text = textString;
  speechSynthesis.speak(talk);
}

// starting volume 0 //
talk.volume = 0;

// audio button toggle talk.volume between 1 and 0 on checkbox click //
var btnToggle = function() {
  if (talk.volume === 0) {
    talk.volume = 1;
  } else if (talk.volume === 1){
    talk.volume = 0;
  };
  console.log("this feature was my main contribution. ¯\\_(ツ)_/¯ ");
};

document.getElementById("cbox").addEventListener("click", btnToggle);