/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//处理不了全是负数的情况
// var maxSubArray = function (nums) {
//   if (nums.length == 1) return nums[0]
//   let prefixSum = []
//   prefixSum[0] = 0
//   for (let i = 0; i < nums.length; i++) {
//     prefixSum[i + 1] = prefixSum[i] + nums[i]
//   }
//   prefixSum.sort((a, b) => a - b)
//   if (prefixSum[prefixSum.length - 1] == 0) {
//     prefixSum.pop()
//   }
//   return prefixSum[prefixSum.length - 1] - prefixSum[0]
// };

/**
 * 每一步都在判断“要不要把前面的和带过来”，只要前面的和是正的，就带上，否则就从当前元素重新开始。这样能保证每一步的子数组和都是最大的
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    //实际上遍历算出了以nums[i]结尾的连续子序列的最大和(覆盖了所有情况)
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// @lc code=end

