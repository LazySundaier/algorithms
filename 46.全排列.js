/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 每一次backtrack固定一项
 * 比如[1,2,3]
 * 先固定1,再固定2,再固定3--->找到了一个排列[1,2,3]
 * 然后取消3,它的for循环结束了
 * 回溯到2的循环,取消固定2,for循环,固定了3
 * 然后固定了2---->找到了一个排列[1,3,2]
 * 回溯到2的循环,它的for循环结束了
 * 回溯到1的循环,for循环,固定了2
 */
var permute = function (nums) {
  const res = [];
  const path = [];
  const used = Array(nums.length).fill(false);
  backtrack();
  return res;

  function backtrack() {
    if (path.length == nums.length) {
      // res.push(path);这样存的是path的引用,最后path会被清空
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack();
      path.pop();
      used[i] = false;
    }
  }
};
// @lc code=end
