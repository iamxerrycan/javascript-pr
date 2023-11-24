function fizzbuzz(str) {
    let fizz = [];
    for (let i = 1; i <= str; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizz.push("fizzbuzz");
      } else if (i % 3 === 0) {
        fizz.push("fizz");
      } else if (i % 5 === 0) {
        fizz.push("buzz");
      } else {
        fizz.push(i.toString());
      }
    }
    return fizz;
  }
  
  console.log(fizzbuzz(77));