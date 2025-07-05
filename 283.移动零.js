/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   const n = nums.length
//   let next = 0
//   for (let i = 0; i < n; i++) {
//     if (next < n) {
//       while (nums[next] == 0) {
//         next++
//       }
//       nums[i] = nums[next < n ? next++ : n - 1]
//     } else {
//       nums[i] = 0
//     }
//   }
// };

var moveZeroes = function (nums) {
  let index = 0
  for (let num of nums) {
    if (num !== 0) {
      nums[index++] = num
    }
  }
  while (index < nums.length) {
    nums[index++] = 0
  }
}
// @lc code=end

