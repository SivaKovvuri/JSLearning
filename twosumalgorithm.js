//given an array and target; return the indices that sum up the target
//nums =[2,7,11,15] target =9
// nums[0]+nums[1]= 9 return [0,1]

// let nums = [2,7,11,15]
// let target = 9
// let output=[]
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i]+nums[i+1] == target){
//         output.push(i,i+1)
//     }
    
// }
// console.log(output)


// let nums = [2, 7, 11, 15];
// let target = 9;

// let indicesMap = {}; // To store the indices of the numbers we've seen
// let output = [];

// for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     console.log('complement',complement)
//     if (complement in indicesMap) {
//         output = [indicesMap[complement], i];
        
//         break; // Found the pair, no need to continue
//     }
//     indicesMap[nums[i]] = i; // Store the index of the current number
//     console.log('indicesMap',indicesMap)

// }

//console.log(output); // Output: [0, 1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums=[2,7,9,15]
let target =9
let twoSum = function(nums, target) {
    
    let indices={}
    for(let i=0;i<nums.length;i++){
    let complement = target - nums[i];
    if(complement in indices){
    output = [indices[complement],i]
    return output;
    }
    indices[nums[i]]=i;
    
    };
}
    console.log(twoSum(nums,target))
    
    
    
    
    
