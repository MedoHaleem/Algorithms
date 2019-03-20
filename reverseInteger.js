// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21

function reverse(x) {
    let array = x.toString(10).split('');
    let reverse = '';
    if (array[0] === '-') reverse = array.shift();
    for (let i = array.length - 1; i >= 0; i--) {
        reverse += array[i];
    }
    console.log(NumberInt(reverse));
}

reverse(-123);

