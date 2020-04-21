function largestSubarraySum(array) {
    let oldSum = 0, newSum = 0, maxSum = array[0];
    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            newSum = oldSum + array[j];
            if (newSum > maxSum) {
                maxSum = newSum;
            }
            oldSum = newSum;
            newSum = 0;
            console.log(maxSum);
        }
    }
    return maxSum;
}

let array1 = [1, 2, 3], array2 = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];

largestSubarraySum(array1);