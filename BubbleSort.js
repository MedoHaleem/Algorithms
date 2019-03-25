const numbers = [99, 44, 6, 2, 1, 5, 63, 600, 87, 283, 4, 0, 300];

function bubbleSort(numbers) {
    let count = numbers.length;
    while (count !== 0) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
            }
        }
        count--;
    }

}

bubbleSort(numbers);
console.log(numbers);