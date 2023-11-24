function ispalindrome(s) {
    s = s.toLowerCase();
    let correctedstr = "";
    for (let i = s.length - 1; i >= 0; i--) {
      const char = s.charAt(i);
      if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
        correctedstr += char;
      }
    }
  
    let left = 0;
    let right = correctedstr.length - 1;
  
    while (left < right) {
      if (correctedstr[left] !== correctedstr[right]) {
        return false;
      } else {
        left++;
        right--;
      }
    }
    return true;
  }
  
  console.log(ispalindrome("asdffdsa"));
  console.log(ispalindrome("asdfgh"));
  