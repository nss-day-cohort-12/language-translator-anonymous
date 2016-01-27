var Translator = (function() {
  

  return {

	}
})();


var execute = function (){
  var userText = document.getElementById("textArea").value;
  userTextArray = userText.split(" ");
  console.log("User Input", userTextArray);
  
  var languageSelected = document.getElementById("selectLanguage").value
  
  if (languageSelected === "French"){
    var finalTranslation = Translator.toFrench(userTextArray);
    console.log("finalTranslation", finalTranslation);
    document.getElementById("output").innerHTML = finalTranslation;
    
  } else if (languageSelected === "German") {
    var finalTranslation = Translator.toGerman(userTextArray);
    console.log("finalTranslation", finalTranslation);
    document.getElementById("output").innerHTML = finalTranslation;

  } else if (languageSelected === "Icelandic") {
    var finalTranslation = Translator.toIcelandic(userTextArray);
    console.log("finalTranslation", finalTranslation);
    document.getElementById("output").innerHTML = finalTranslation;
    
  } else {
    alert("Please Pick a language.")
  }
};

document.getElementById("tranlate_button").addEventListener("click", execute)


