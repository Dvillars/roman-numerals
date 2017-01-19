var romans10 = ['I','X','C','M'];
var romans5 = ['V','L','D']

var romanChecker = function(textInput){
  var result;

  if (parseInt(textInput) <= 3999){
    result = true;
  } else {
    result = false;
  };

  return result;
};

var numberSplit = function(textInput) {
  var numberArray = textInput.split("");
  return numberArray;
}

var numberEvaluate = function(number, position) {
  var numeral = "";
  if (number < 4) {
    console.log("It's less than four");
    numeral += romans10[position].repeat(number);
  } else if (number === 4) {
    console.log("it's four!");
    numeral = romans10[position] + romans5[position];
  } else if (number < 9 && number > 4) {
    console.log("It's less than 9");
    numeral += romans5[position];
    number = number % 5;
    numeral += romans10[position].repeat(number);
  } else if (number === 9) {
    console.log("It's 9");
    numeral = romans10[position] + romans10[position+1];
  } else {
    console.log('OHNO');
  };
  return numeral;
}

var romanTranslate = function(numberArray) {
  var revNumArray = numberArray.reverse();
  var outputNumeral = [];
  for (i=0; i < revNumArray.length; i++) {
    var number = parseInt(revNumArray[i]);
    outputNumeral.push(numberEvaluate(number, i));
  };
  var finalNumeral = outputNumeral.reverse().join("");
  return finalNumeral;
};

$(function(){
  $("form.roman-form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#text-input").val();
    var isValid = romanChecker(textInput);
    var textOutput;
      if (isValid === true) {
        var numberArray = numberSplit(textInput);
        textOutput = romanTranslate(numberArray);

      } else {
        textOutput = 'NOT A VALID NUMBA!!!!'
      }
    $(".result").text(textOutput).slideDown();
  })
});
