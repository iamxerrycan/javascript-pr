# Beginner Level JavaScript String Questions

This guide covers beginner-level string operations in JavaScript. Each topic includes a brief explanation, examples, and links to relevant MDN documentation.

---

## 1. What is the difference between `slice()` and `substring()` in JavaScript?

### **Definition**
- **`slice()`**: Extracts a section of a string and returns it as a new string without modifying the original string.
- **`substring()`**: Returns a portion of the string between two indices but does not accept negative indices.

### **Key Differences**
- **Negative indices**: `slice()` supports negative indices, while `substring()` does not (negative values are treated as `0`).
- **Index order**: `slice()` does not swap indices if `start > end`, but `substring()` swaps them.

### **Code Example**
```javascript
const str = "JavaScript";

// Using slice
console.log(str.slice(0, 4)); // Output: "Java"
console.log(str.slice(-6));  // Output: "Script"

// Using substring
console.log(str.substring(0, 4)); // Output: "Java"
console.log(str.substring(4, 0)); // Output: "Java"


```
## 2. How can you convert a string to uppercase?

### **Code Example**
```javascript

const str = "JavaScript";

function strstartwith(a , b){
    if(a[0] === b){
        return true
    }
    return false;
}

console.log(strstartwith(str , "j"))


```

## 3. How can you convert a string to uppercase?

### **Code Example**
```javascript

const str = "JavaScript";

function uppercase(a){
   return a.toUpperCase()
}

console.log(uppercase(str)


```
## 4. How can you find the length of a string? 

### **Code Example**
```javascript

console.log(ste.length)

```

## 5. How can you find the length of a string?

### **Code Example**
```javascript
const str = "JavaScript";

function getLength(a) {
  return a.length;
}

console.log(getLength(str)); // Output: 10

```
## 6. Write a function to reverse a given string.

### **Code Example**
```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}

const input = "JavaScript";
console.log(reverseString(input)); // Output: "tpircSavaJ"
```


