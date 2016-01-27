var Translator = (function() {
  

  return {

	}
})();


var exicute = function (){
  var userText = document.getElementById("textArea").value;
  userTextArray = userText.split(" ");
  console.log("User Input", userTextArray);
  
  var finalTranslation = Translator.toIcelandic(userTextArray);
  console.log("finalTranslation", finalTranslation);

  }
document.getElementById("tranlate_button").addEventListener("click", exicute)


