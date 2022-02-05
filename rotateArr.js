/* #189 Rotate Array
Given an array, rotate the array to the right by k steps, where k is non-negative.
Follow up:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/ 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    var newArr = []; 
    var index;
    for(var i = 0; i < nums.length; i++){
        index = (i + k) % nums.length; 
        newArr[index] = nums[i];
    }
    var end = nums.length; 
    nums.splice(0, end);
    
    for(var j = 0; j < newArr.length; j++) {
        nums.push(newArr[j]); 
    }
}

/** */