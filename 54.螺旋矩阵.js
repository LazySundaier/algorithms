/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// var spiralOrder = function (matrix) {
//   let row = matrix.length
//   let col = matrix[0].length
//   const res = []
//   return spiral(matrix, 0, 0)
//   function spiral(matrix, i, j) {
//     let i_ = i
//     let j_ = j
//     if (i_ + 1 == row && j_ + 1 == col) {
//       res.push(matrix[i][j])
//       return res
//     }
//     if (i_ + 1 == row) {
//       while (j_ <= col - 1) {
//         res.push(matrix[i_][j_])
//         j_++
//       }
//       return res
//     }
//     if (j_ + 1 == col) {
//       while (i_ <= row - 1) {
//         res.push(matrix[i_][j_])
//         i_++
//       }
//       return res
//     }

//     while (j_ < col - 1) {
//       console.log('j', j_);
//       res.push(matrix[i_][j_])
//       j_++
//     }
//     while (i_ < row - 1) {
//       console.log('i', i_);
//       res.push(matrix[i_][j_])
//       i_++
//     }
//     while (j_ > i) {
//       console.log('j', j_);
//       res.push(matrix[i_][j_])
//       j_--
//     }
//     while (i_ > j) {
//       console.log('i', i_);
//       res.push(matrix[i_][j_])
//       i_--
//     }

//     row = row - 1
//     col = col - 1

//     if (row <= i + 1 || col <= j + 1) {
//       return res
//     } else {
//       return spiral(matrix, i + 1, j + 1)
//     }
//   }
// };

var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];

  const result = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 从左到右
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    top++;

    // 从上到下
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // 从右到左（需要判断是否还有行）
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // 从下到上（需要判断是否还有列）
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
// @lc code=end

