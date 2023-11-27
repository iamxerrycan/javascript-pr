function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  const num = fibonacci(2);
  console.log(num);
  console.log("hello");
  