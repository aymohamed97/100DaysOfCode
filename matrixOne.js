// // #766 Toeplitz Matrix
// // A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
// // Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 
// Example 1:
// Input:
// matrix = [
//   [1,2,3,4],
//   [5,1,2,3],
//   [9,5,1,2]
// ]
// Output: True
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.*/
// /**
//  * @param {number[][]} matrix
// //  * @return {boolean}
//  */
var isToeplitzMatrix = function(matrix) {
    for (var row = 0; row < matrix.length; row++) {
     for (var col = 0; col < matrix[0].length; col++) {
         if (row > 0 && col > 0 && matrix[row-1][col-1] != matrix[row][col]) {
                return false;
            } 
        } 
    }
    return true;
};

// /*