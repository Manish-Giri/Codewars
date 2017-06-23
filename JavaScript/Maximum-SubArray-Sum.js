// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

var maxSequence = function (arr) {
    // ...

    function isArrayNegative(arr) {
        "use strict";
        return arr.every(element => element < 0) ? true : false;
    }

    function isArrayPositive(arr) {
        "use strict";
        return arr.every(element => element >= 0) ? true : false;
    }

    // if array has negative elements only or is empty - return 0
    if (isArrayNegative(arr) || !arr.length) {
        return 0;
    }

    // if array has all positive elements, return sum
    if (isArrayPositive(arr)) {
        return arr.reduce((a, b) => a + b);
    }


    let maxSum = 0, currentSum = 0;

    for(let i = 0; i < arr.length; i++) {

        // find sum upto current element
        currentSum += arr[i];

        // if max sum is lesser than current sum, set max sum to current sum

        if(maxSum < currentSum) {
            maxSum = currentSum
        }

        // if current num is negative, reset sum to 0
        if(currentSum < 0) {
            currentSum = 0;
        }


    }
    return maxSum;

}


maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6
