// #1365 How Many Numbers Are Smaller Than Current Number // Success 

// Input: nums = [8,1,2,2,3] - sort it and apply some hashMap
// Output: [4,0,1,1,3]

// [8,1,2,2,3]
// Sort - 
//  0 1 2 3 4
// [1,2,2,3,8]
 
//  1-0 - i
//  2-1  -i 
//  3-3  - i
//  8-4

// [8,1,2,2,3]
//  4 0 1 1 3

var smallerNumbersThanCurrent = function(nums) {
    // nums [8,1,2,2,3]
    var input = [...nums];
    var hashMap = new Map(); 
    var valuesToReturn = []; 
    
    // sort ascending  
    sorted = input.sort((a,b) => a - b); 
    // sorted [1,2,2,3,8] 
    
    // pseudocode 
    /* for each num in sorted 
    add value as key and index as value to hashmap 
    if the hashmap does not already have key */  
    
    for(var j = 0; j < sorted.length; j++){
      if(!hashMap.has(sorted[j])) {
         hashMap.set(sorted[j], j); 
      } 
    } 
    
    // pseudocode 
    /* then for each num in nums 
    do a lookup by key and add the value to 
    array to return. */ 
    
    for(var k = 0; k < nums.length; k++) {
      valuesToReturn.push(hashMap.get(nums[k])); 
    } 
      
      console.log(nums); 
    
    return valuesToReturn; 
  }
  