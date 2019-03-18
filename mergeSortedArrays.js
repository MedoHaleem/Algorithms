//mergeSortedArrays([0,3,4,31], [4,6,8,30]);
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2) {
    if (array1.length === 0) {
        return array2
    }
    if (array2.length === 0) {
        return array1
    }
    let mergedArray = [...array1, ...array2];
    for (let i = 0; i <= mergedArray.length - 1; i++) {
        if (i === mergedArray.length - 1) {
            return mergedArray;
        }
        let low = mergedArray[i];
        let high = mergedArray[i + 1];
        if (high < low) {
            mergedArray[i] = high;
            mergedArray[i + 1] = low;
        }
        console.log(mergedArray);
    }
}


mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);