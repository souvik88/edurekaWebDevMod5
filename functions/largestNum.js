//Write a JavaScript function to find the largest of 3 numbers and display it.

let largestNumFun = function(num1, num2, num3) {
    let max = '';
    if(num1 > num2) {
        max = num;
    }
    else {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
    //return `The largest number is ${num}`;
}
console.log(largestNumFun(1,20,3));