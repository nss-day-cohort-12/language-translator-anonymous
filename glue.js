var Translator = (function() {
  return {}
})();

var execute = function (){
  //*** GET USER INPUT AND CREATE AN ARRAY ***//
  var userText = document.getElementById("textArea").value.toLowerCase();
  userTextArray = userText.split(" ");
  console.log("User Input", userTextArray);
  
  //*** ACCESS DROPDOWN VALUE ***//
  var languageSelected = document.getElementById("selectLanguage").value
  
  //*** CHECK DROPDOWN AND RUN TRANSLATE FUNCTION ***//
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

document.getElementById("tranlate_button").addEventListener("click", execute);

var clear = function() {
  console.log("anything");
  document.getElementById("textArea").value = "";
  document.getElementById("output").innerHTML = "";
}
document.getElementById("clear").addEventListener("click", clear);



// finalTranslation.slice(0,1).toUpperCase() += finalTranslation.slice(1);

