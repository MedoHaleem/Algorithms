// Input: [-2,1,-3,4,-1,2,1,-5,4],
//     Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
//

function divideArray(nums, highestNum) {
    let sum1, sum2 = 0
    let middleIndex = Math.floor(nums.length / 2);
    let nums1 = nums.slice(0, middleIndex);
    let nums2 = nums.slice(middleIndex + 1);
    if (nums1.length === 0 && nums2.length === 0) {
        console.log(highestNum)
        return highestNum;
    }

    if (nums1.length > 0) sum1 = nums1.reduce((sum, x) => sum + x);
    if (nums2.length > 0) sum2 = nums2.reduce((sum, x) => sum + x);
    if (highestNum < sum1 + sum2) {
        highestNum = sum1 + sum2;
    }

    divideArray(nums1, highestNum);
    divideArray(nums2, highestNum);

}

function maxSubArray(nums) {
    let highestNum = nums.reduce((sum, x) => sum + x);
    let num = divideArray(nums, highestNum);
    console.log(num);
    return num;

}

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(input);




// function divideArray(nums, highestNum = 0) {
//     let middleIndex = Math.floor(nums.length / 2);
//     let left = nums.slice(0, middleIndex);
//     let right = nums.slice(middleIndex + 1);
//
//     if (left.length === 0 || right.length === 0) return highestNum;
//     let sum1 = left.length !== 1?  left.reduce((sum, x) => sum + x): left[0];
//     let sum2 = right.length !== 1?  right.reduce((sum, x) => sum + x): right[0];
//     if (highestNum < sum1 + sum2) {
//          highestNum = sum1 + sum2;
//     }
//     right = divideArray(right, highestNum);
//     left = divideArray(left, highestNum);
//     console.log(left, right)
// }
//
//
// function maxSubArray(nums) {
//     let highestNum = nums.reduce((sum, x) => sum + x);
//     let num = divideArray(nums, highestNum);
//     console.log(num);
//     return num;
//
// }
//
// let input = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(divideArray(input));