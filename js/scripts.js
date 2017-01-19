var romans = ['M','D','C','L','X','V','I'];

var romanChecker = function(textInput){
  var result;

  if (parseInt(textInput) <= 3999){
    result = true;
  } else {
    result = false;
  };

  return result;
};

$(function(){
  $("form.roman-form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#text-input").val();
    var isValid = romanChecker(textInput);
      if (isValid === true) {
        var textOutput = numberSplit(textInput);
      } else {
        var textOutput = 'NOT A VALID NUMBA!!!!'
      }
    $(".results").text(textOutput);
  })
});
