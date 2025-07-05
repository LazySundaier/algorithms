/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   if (nums.length == 1 || nums.length == k) return nums
//   const k_ = k % nums.length
//   let right = nums.length - 1
//   const rightNums = nums.splice(right - k_ + 1, right)
//   for (let i = k_ - 1; i >= 0; i--) {
//     nums.unshift(rightNums[i])
//   }
//   return nums
// };

var rotate = function (nums, k) {
  k = k % nums.length;
  // 反转整个数组
  nums.reverse();
  // 反转前k个
  reverse(nums, 0, k - 1);
  // 反转后n-k个
  reverse(nums, k, nums.length - 1);

  function reverse(arr, left, right) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
};
// @lc code=end

