// Check if All Characters Have Equal Number of Occurrences
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    
    const sArr=s.split('')

    const sCount={};
    for(value of sArr){
        if(sCount[value]){
            sCount[value]++;
        }else{
           sCount[value]=1;
        }
    }
   const counts = Object.values(sCount);
const isGoodString = counts.every((count, index, arr) => {
    return count === arr[0];
});
 return isGoodString;
};

console.log(areOccurrencesEqual('aaabb'))
