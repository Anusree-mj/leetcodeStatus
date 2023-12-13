// two sums
var twoSum = function(nums, target) {
    const numsMap=new Map();
    for(let i =0;i<=nums.length-1;i++){
        const expectdNum = target - nums[i];
        if(numsMap.has(expectdNum)){
            return [i,numsMap.get(expectdNum)];
        }else{
            numsMap.set(nums[i],i)
        }
    }
   
  
};

console.log(twoSum([2,7,11,15],9))
