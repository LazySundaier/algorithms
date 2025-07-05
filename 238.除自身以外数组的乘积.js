/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   const prefix = [1]
//   const suffix = [1]
//   const res = []
//   for (let i = 1; i < nums.length+1; i++) {
//     prefix[i] = prefix[i - 1] * nums[i-1]
//   }
//   //后缀积不好计算,这个是有问题的
//   for (let i = nums.length; i >= 0; i--) {
//     suffix[i] = suffix[i + 1] * nums[i]
//   }
//   for (let i = 1; i < nums.length - 1; i++) {
//     res.push(prefix[i - 1] * suffix[i + 1])
//   }
//   res.unshift(suffix[1])
//   res.push(prefix[nums.length - 1])
//   return res
// };

var productExceptSelf = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(1);

  // 计算前缀积
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  // 计算后缀积并累乘到结果
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
};
// @lc code=end

