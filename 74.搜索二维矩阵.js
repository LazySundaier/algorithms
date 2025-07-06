/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false

  let row = -1
  for (let i = 0; i < m - 1; i++) {
    if (target >= matrix[i][0] && target < matrix[i + 1][0]) {
      row = i
      break
    }
  }
  if (row == -1) row = m - 1
  else matrix[row].push(matrix[row + 1][0])

  for (let num of matrix[row]) {
    if (num == target) return true
  }
  return false
};

var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let row = 0;           // 从右上角开始
  let col = n - 1;

  while (row < m && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;         // 当前值太大，向左走
    } else {
      row++;         // 当前值太小，向下走
    }
  }

  return false;
};
// @lc code=end

