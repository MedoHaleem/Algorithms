//Given an array = [2,5,1,2,3,5,1,2,4]
//it should return 2

function findRecurringCharacter(array) {
    let sameNumber = new Array(array.length);
    for (let num of array) {
        if (sameNumber[num]) {
            console.log(num);
            return num;
        }
        sameNumber[num] = true;
    }
    return null
}

let array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
findRecurringCharacter(array);