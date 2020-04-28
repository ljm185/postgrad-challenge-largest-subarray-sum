function largestSubarraySum(array) {
    let sum = 0;
    let maxSum = 0;
    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            sum += array[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
            console.log(maxSum);
        }
        sum = 0;
    }
    return maxSum;
}

function largestSubarraySumFast(array) {
    let sum = 0; 
    let maxSum = 0;
    for (i = 0; i < array.length; i++) {
        if (sum + array[i] < 0) {
            sum = 0;
            console.log(maxSum);
        } else {
            sum += array[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
            console.log(maxSum);
        }
    }
    return maxSum;
}

let array1 = [1, 2, 3], array2 = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];

largestSubarraySumFast(array2);