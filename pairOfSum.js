//  pair of numbers that has sum of value of given number
function hasPairWithSum (arr, sum) {
    const mySet = new Set()
    for (let num of arr) {
        if (mySet.has(num)) {
            return true
        }
        mySet.add((sum - num))
    }
    return false
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9))
