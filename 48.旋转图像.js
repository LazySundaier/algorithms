/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 * 顺时针90度 = 转置 + 水平翻转
 * 逆时针90度 = 转置 + 垂直翻转
 * 180度 = 水平翻转 + 垂直翻转
 * 270度 = 逆时针90度 = 顺时针90度 × 3
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // 1. 转置矩阵（沿对角线翻转）
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 2. 水平翻转每一行
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      [matrix[i][j], matrix[i][n - 1 - j]] =
        [matrix[i][n - 1 - j], matrix[i][j]];
    }
  }

  // 垂直翻转
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
    }
  }
};
// @lc code=end

