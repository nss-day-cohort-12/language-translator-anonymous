var Translator = (function() {
  

  var exicute = function (){
    var userText = document.getElementById("textArea").value;
    userTextArray = userText.split(" ");
    console.log("User Input", userTextArray);
    }
  document.getElementById("tranlate_button").addEventListener("click", exicute)

  return {

	}
})();

