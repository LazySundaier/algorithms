/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0
  let preSum = 0
  let preSumMap = new Map()
  // 初始化，前缀和为0出现1次（空数组的情况）
  preSumMap.set(0, 1)

  for (let num of nums) {
    preSum += num

    // 如果存在前缀和为 (prefixSum - k) 的位置
    // 说明从那个位置到当前位置的子数组和为 k
    if (preSumMap.has(preSum - k)) {
      count += preSumMap.get(preSum - k)
    }
    preSumMap.set(preSum, (preSumMap.get(preSum) || 0) + 1)
  }
  return count
};
// @lc code=end

