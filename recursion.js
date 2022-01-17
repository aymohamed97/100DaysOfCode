/*
344. Reverse String
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place.
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// one way of doing two pointers (not recursion)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let backIndex = s.length - 1;
    
    for (let i = 0; i < s.length / 2; i++) {
        let currentLetter = s[i];
        s[i] = s[backIndex]; 
        s[backIndex] = currentLetter; 
        backIndex = backIndex - 1;
    }
    
    return s;
};
