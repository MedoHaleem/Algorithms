const numbers = [99, 44, 6, 2, 1, 5, 63, 600, 87, 283, 4, 0, 300];

function QuickSort(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }
    const pivotIndex = numbers.length - 1;
    const pivot = numbers[pivotIndex];
    const left = [];
    const right = [];
    for (let i = 0; i < pivotIndex; i++) {
        const currentItem = numbers[i];
        if (currentItem < pivot) {
            left.push(currentItem);
        } else {
            right.push(currentItem);
        }
    }

    return  [...QuickSort(left), pivot, ...QuickSort(right)]

}


console.log(QuickSort(numbers));
