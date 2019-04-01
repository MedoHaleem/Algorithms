var findMedianSortedArrays = function (nums1, nums2) {
    const nums = [...nums1, ...nums2];
    nums.sort(function (a, b) {
        return a - b;
    });
    if (nums.length % 2 === 0) {
        const middle = Math.floor(nums.length / 2);
        const left = nums.slice(0, middle);
        const right = nums.slice(middle);
        return ((left.pop() + right.shift()) / 2).toFixed(1);

    } else {
        const middle = Math.floor(nums.length / 2);
        return nums[middle].toFixed(1);
    }
};

// faster solution
const findMedianSortedArrays2 = (nums1, nums2) => {
    let newArr = [];

    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            newArr.push(nums1.shift());
        } else newArr.push(nums2.shift());
    }
    newArr = [...newArr, ...nums1, ...nums2];

    let center = Math.floor(newArr.length / 2);

    if (newArr.length % 2 === 0) {
        return (newArr[center] + newArr[center - 1]) / 2;
    }
    return newArr[center];
};


console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays2([1, 3], [2]));