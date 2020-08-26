

// my solution

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const myFindNumberIn2DArray = function (matrix, target) {
    return matrix.flat(Infinity).includes(target)
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function (matrix, target) {
    if (matrix.length < 1 || matrix[0].length < 1) {
        return false
    }
    let row = 0
    let col = matrix[0].length - 1
    while (row < matrix.length && col >= 0) {
        let corner = matrix[row][col]
        if (corner === target)
            return true
        else if (corner > target) {
            col--
        } else {
            row++
        }
    }
    return false
};

const arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

console.log(myFindNumberIn2DArray(arr, 5));
console.log(myFindNumberIn2DArray(arr, 20));

