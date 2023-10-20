const multi = (a) => {
    return (b) => {
      return (c) => {
        return a + b + c;
      };
    };
  };
  
  // Usage
//   const addA = multi(2);       
//   const addB = addA(3);   
  const result = multi(3)(3)(5)
  console.log(result);           
  