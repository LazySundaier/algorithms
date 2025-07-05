/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length
  let left = 0
  let right = n - 1
  let max = 0
  while (left < right) {
    if (height[left] <= height[right]) {
      max = Math.max(max, height[left] * (right - left))
      left++
    } else {
      max = Math.max(max, height[right] * (right - left))
      right--
    }
  }
  return max
};
// @lc code=end

