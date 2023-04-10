// function hasTargetSum(array, target) {
//   // Write your algorithm here
// }

// /* 
//   Write the Big O time complexity of your function here
// */

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;




function hasTargetSum(array, target) {
  // Sort the array in non-descending order
  array.sort((a, b) => a - b);

  // Set two pointers to the start and end of the array
  let left = 0;
  let right = array.length - 1;

  // Loop through the array while the two pointers don't overlap
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      return true; // Return true if we find a pair that adds up to the target
    } else if (sum < target) {
      left++; // Move the left pointer to the right
    } else {
      right--; // Move the right pointer to the left
    }
  }

  return false; // Return false if we exhaust all possible pairs without finding one that adds up to the target
}

/*
  Time complexity: O(n log n) due to the sorting of the array
*/

/*
  Pseudocode:
  - Sort the array in non-descending order
  - Set two pointers to the start and end of the array
  - Loop through the array while the two pointers don't overlap
    - Calculate the sum of the two values at the left and right pointers
    - If the sum equals the target, return true
    - If the sum is less than the target, move the left pointer to the right
    - If the sum is greater than the target, move the right pointer to the left
  - Return false if we exhaust all possible pairs without finding one that adds up to the target
*/

/*
  Solution explanation:
  We first sort the array in non-descending order so that we can use two pointers to search for pairs that add up to the target. We initialize the two pointers to the start and end of the array, respectively. We then loop through the array while the two pointers don't overlap. At each iteration, we calculate the sum of the two values at the left and right pointers. If the sum equals the target, we return true, as we've found a pair that adds up to the target. If the sum is less than the target, we move the left pointer to the right, as increasing the sum requires us to add a larger value. If the sum is greater than the target, we move the right pointer to the left, as decreasing the sum requires us to subtract a smaller value. We continue this process until we find a pair that adds up to the target or exhaust all possible pairs without finding one. If we exhaust all possible pairs, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
