const numbers = [99, 44, 6, 2, 1, 5, 63, 600, 87, 283, 4, 0, 300];

function MergeSort(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }
    const middle = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, middle);
    const right = numbers.slice(middle);

    return merge(MergeSort(left), MergeSort(right));
}

function merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}


console.log(MergeSort(numbers));
