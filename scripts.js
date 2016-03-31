$(document).ready(function() {
  $("#translate").submit(function(event) {
   event.preventDefault();

   var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
   var squareInput = $("#squareInput").val().toUpperCase().split("");


   function isPunctuation (letter) {
      return alphabet.includes(letter);
    }

  //filter out "bad" values
  console.log(squareInput)
  var filteredOut = [];
  filteredOut = squareInput.filter(isPunctuation);

  //determines dimensions of the array
  var cryptoRow = 1;
  var cryptoColumn = 1;
  while (cryptoRow * cryptoColumn < filteredOut.length) {
    if (cryptoRow < cryptoColumn) {
      cryptoRow++;
    } else {
      cryptoColumn++;
    }
  }

  //creating and inputing values into 2D array
  var cryptoArray = [];
  for (var col = 0; col < cryptoColumn; col++) {
    cryptoArray.push([]);
    for (var row = 0; row < cryptoRow; row++) {
      console.log(filteredOut);
      cryptoArray[col].push(filteredOut.shift())
    }
  }
  // alert(cryptoArray);
   console.log(cryptoArray);
  // cryptoArray.forEach(function(???) {

  // });


 });
});



// for (i=0; i < squareInput.length; i++) {
//     var currentLetter = squareInput[i];
//     filteredOut = squareInput.filter(isPunctuation);
// }
