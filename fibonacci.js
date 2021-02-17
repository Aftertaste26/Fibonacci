const fib = (n, recentValues) => {

  recentValues = recentValues || [];

  if (recentValues[n]) {
    return recentValues[n];
  }

  if (n <= 2) {
    return 1;
  }
  
  recentValues[n] = fib(n - 1, recentValues) + fib(n - 2, recentValues);
  return recentValues[n];
};

module.exports = { fib };
