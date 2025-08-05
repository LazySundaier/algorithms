/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 一共有3个数,一个不动,另外两个动
 */
var threeSum = function (nums) {
  //因为与元素的顺序无关,那就定一个顺序,保证不会出现重复的组合
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res = [];
  //找出以nums[i]为基准的组合
  for (let i = 0; i < n - 2; i++) {
    //nums[i]这个基准已经尝试过了,跳过重复的数
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //和为零,必须要有负数
    if (nums[i] > 0) break;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);
        //因为是有序数组,所以可以跳过重复的元素
        //跳过左边的重复元素
        while (left < right && nums[left] == nums[left + 1]) left++;
        //跳过右边的重复元素
        while (left < right && nums[right] == nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
// @lc code=end
