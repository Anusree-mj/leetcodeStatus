// contains duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueNumArr= new Set ();
    for (const num of nums){
        if(uniqueNumArr.has(num)){
            return true;
        }else{
            uniqueNumArr.add(num);
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))
