//misiing number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
 const sortdArr=nums.sort((a,b)=>{
     return (a-b);
 })
 console.log(sortdArr);
 for(let i=0;i<=nums.length;i++){
     if(sortdArr[i]!==i){
         return i;
     }
 }

};

console.log(missingNumber([3,0,1]))
