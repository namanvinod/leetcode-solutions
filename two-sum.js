// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
    if(!nums || !nums.length) return [];

    const sortedNums = [...nums].sort((a, b) => a - b);
    console.log(1.1, sortedNums);
    for(let counter = 0; counter < sortedNums.length - 1; counter++) {
        // console.log(1.1, 1);
        const currNum = sortedNums[counter];
        // if(currNum > target) return [11,11];
        const remainingValue = target - currNum;
        let remainingValueIndex = nums.findIndex(num => num === remainingValue);
        if(remainingValueIndex > -1) {
            let currNumIndex= nums.findIndex(num => num === currNum);
            if(remainingValueIndex === currNumIndex) {
                remainingValueIndex = currNumIndex + 1 + nums.slice(currNumIndex + 1).findIndex(num => num === remainingValue);
            }

            // console.log(1.1, counter, currNum, currNumIndex, remainingValue, remainingValueIndex, nums.slice(currNumIndex + 1));
            if(remainingValueIndex === currNumIndex) continue;
            return [currNumIndex, remainingValueIndex];
        }
    }

    return [22,22];
};

// console.log(1, twoSum([], 9), []);
// console.log(2, twoSum(null, 9), []);
// console.log(3, twoSum([2,6, 9, 11], 9), []);
// console.log(4, twoSum([2,7,11,15], 9), [0,1]);
// console.log(5, twoSum([1,2,7], 9), [1,2]);
// console.log(6, twoSum([8,11,58,15], 26), [1,3]);
// console.log(7, twoSum([3,3], 6), [0,1]);
// console.log(8, twoSum([2,3,3], 6), [1,2]);
// console.log(9, twoSum([0,4,3,0], 0), [0,3]);

console.log(10, twoSum([-1,-2,-3,-4,-5],-8), [2,4]);