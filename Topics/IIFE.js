// (function() {
//     var privateVariable = "I am private!";
  
//     function privateFunction() {
//       console.log("This function is private.");
//     }
//   })();

(function() {
    var privateVariable = "I am private!";
  
    function privateFunction() {
      console.log("This function is private.");
    }
  
    console.log("Inside the IIFE");
    privateFunction();
  })();
  
  // Attempting to access privateVariable or privateFunction here would result in an error.
  