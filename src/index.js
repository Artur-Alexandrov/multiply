module.exports = function multiply(first, second) {
  // your solution
  let result = BigInt(first) * BigInt(second);
  return BigInt(result).toString();
  
}
