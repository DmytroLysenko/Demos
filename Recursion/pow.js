function pow(x, n) {
    // Execution contexts
    // 1. x = 2, n = 3  - first call pow
    // 2. x = 2, n = 2  - second call pow
    // 3. x = 2, n = 1  - third call pow -> return x = 2
    // 2. x * 2         - second call pow -> return x = 4
    // 1. x * 4         - first call pow -> return x = 8
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3));
