/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//超时了
// var longestConsecutive = function (nums) {
//   if (nums.length == 0) return 0
//   let map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], 1)
//     let temp = nums[i]
//     while (nums.some(item => item == temp + 1)) {
//       map.set(nums[i], map.get(nums[i]) + 1)
//       temp++
//     }
//   }
//   return [...map.values()].sort((a, b) => b - a)[0]
// };

var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0
  const set = new Set(nums)
  let maxLength = 0
  for (let num of set) {
    let currentLength = 0
    // 只从连续序列的起点开始计算，避免重复计算
    if (!set.has(num - 1)) {
      let currentNum = num
      // 向右扩展
      while (set.has(currentNum)) {
        currentLength++
        currentNum++
      }
      maxLength = Math.max(maxLength, currentLength)
    }
  }
  return maxLength
}
// @lc code=end

