function largestSubarraySum(array) {
    let oldSum, newSum, maxSum = 0;
    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            newSum = oldSum + array[j];
            if (newSum > maxSum) {
                maxSum = newSum;
            }
            oldSum = newSum;
            console.log(maxSum);
        }
        oldSum = array[i];
    }
    return maxSum;
}

let array1 = [1, 2, 3], array2 = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];

largestSubarraySum(array2);