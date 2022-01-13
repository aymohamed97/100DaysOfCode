/*
Dynamic programming is used where we have problems, which can be divided into similar sub-problems, so that their results can be re-used.
Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming.
*/

/*
#53 Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var n = nums.length;
    var maxSum = nums[0];
    for(var i = 1; i < n; i++) {
      if (nums[i - 1] > 0) {
        nums[i] += nums[i - 1];  
      } 
      maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;  
  };
  