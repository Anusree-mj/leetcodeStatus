//plus one
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
 const integer =  BigInt(digits.join(''));
  const newDigits = (integer+1n).toString()
  
  return newDigits.split('')
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
