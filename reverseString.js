const string = 'Medo';

function reverseString(string) {
    //turn string into an array
    let array = string.split('');
    let reversedString = '';
    for (let i = array.length - 1; i >= 0; i--) {
        reversedString += array[i];
    }
    console.log(reversedString);
    return reversedString;
}

reverseString(string);