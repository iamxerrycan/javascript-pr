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
  
  // Attempting to access privateVariable here would result in an error.
  
  var person = (function() {
    var name = "";
  
    return {
      setName: function(newName) {
        if (typeof newName === 'string') {
          name = newName;
        } else {
          console.log("Name must be a string.");
        }
      },
      getName: function() {
        return name;
      },
      sayHello: function() {
        if (name) {
          console.log("Hello, my name is " + name + ".");
        } else {
          console.log("Hello, I don't have a name yet.");
        }
      }
    };
  })();
  
  // Usage:
  person.setName("Alice");
  console.log("Name: " + person.getName()); 
  person.sayHello(); 
  
  person.setName(42);
  