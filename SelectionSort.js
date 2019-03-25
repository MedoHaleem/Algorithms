const numbers = [99, 44, 6, 2, 1, 5, 63, 600, 87, 283, 4, 0, 300];

function selectionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let smallestNum = numbers[i];
        let smallestIndex = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (smallestNum > numbers[j]) {
                smallestNum = numbers[j];
                smallestIndex = j;
            }
        }
        let temp = numbers[i];
        numbers[i] = smallestNum;
        numbers[smallestIndex] = temp;

    }

}

selectionSort(numbers);
console.log(numbers);