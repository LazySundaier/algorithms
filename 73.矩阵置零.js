/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = new Set()
  const col = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        row.add(i)
        col.add(j)
      }
    }
  }

  for (let item of row) {
    setZero(item, matrix, true)
  }
  for (let item of col) {
    setZero(item, matrix, false)
  }
};

function setZero(i, matrix, flag) {
  if (flag) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = 0
    }
  } else {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][i] = 0
    }
  }
}

var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 标记第一行和第一列是否需要置零
  let firstRowZero = false;
  let firstColZero = false;

  // 检查第一行是否有0
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // 检查第一列是否有0
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // 使用第一行和第一列作为标记
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;  // 标记该行
        matrix[0][j] = 0;  // 标记该列
      }
    }
  }

  // 根据标记置零（除了第一行和第一列）
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 处理第一行
  if (firstRowZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  // 处理第一列
  if (firstColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};
// @lc code=end

