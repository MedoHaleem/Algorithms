// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number, answer = 1) {
    while (true) {
        if (number === 0) {
            return answer;
        }
        answer *= number;
        number--;
        findFactorialRecursive(number, answer);
    }
}

function findFactorialRecursive2(number) {
    if (number === 2) {
      return 2
    }
    return number * findFactorialRecursive2(number-1);
}

console.log(findFactorialRecursive(5));
console.log(findFactorialRecursive2(5));