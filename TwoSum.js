// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
    const myArray = new Array(nums.length);
    for (let i = 0; i <= nums.length; i++) {
        let num = nums[i];
        if (myArray[num] !== undefined) {
            return [myArray[num], i];
        } else {
            myArray[target - num] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));