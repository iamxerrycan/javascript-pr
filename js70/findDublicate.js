function findDuplicates(arr) {
    const duplicates = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  
    return duplicates;
  }
  
  let array = [1, 2, 3, 2, 4, 5, 5];
  const duplicateNumbers = findDuplicates(array);
  console.log("Duplicate Numbers:", duplicateNumbers);
  