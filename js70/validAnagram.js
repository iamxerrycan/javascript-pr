function anagram(s, t) {
    if (s.length != t.length) {
      return false;
    }
  
    let comparing = {};
    for (let i of s) {
      if (!comparing[i]) {
        comparing[i] = 1;
      } else {
        comparing[i]++;
      }
    }
  
    for (let i of t) {
      if (!comparing[i]) {
        return false;
      } else {
        comparing[1]--;
      }
      
    }
    return true;
  }
  
  console.log(anagram("qwert" , "trewq"));
  
  // by using ssplit , short and join method 