/*Given an array a find the size of the smalllest sub array such that it contains at least one occurrence of the maximum value of the array and atleast one minimum value of the array. */


function smallestSubarrayWithMaxAndMin(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);
    
    if (maxVal === minVal) {
        return 1; // if max and min are the same, the smallest subarray is of size 1
    }
    
    let minIndex = -1;
    let maxIndex = -1;
    let smallestLength = arr.length;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxVal) {
            maxIndex = i;
            if (minIndex !== -1) {
                smallestLength = Math.min(smallestLength, maxIndex - minIndex + 1);
            }
        }
        
        if (arr[i] === minVal) {
            minIndex = i;
            if (maxIndex !== -1) {
                smallestLength = Math.min(smallestLength, minIndex - maxIndex + 1);
            }
        }
    }
    
    return smallestLength;
}

// Example usage
const arr = [1, 3, 2, 1, 4, 1, 2, 5, 3, 1];
console.log(smallestSubarrayWithMaxAndMin(arr)); // Output will depend on the specific array
