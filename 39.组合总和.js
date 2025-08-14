/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const n = candidates.length;
  const res = [];
  let path = [];
  backtrack(0, 0);
  return res;

  function backtrack(start, currentSum) {
    if (currentSum === target) {
      res.push([...path]);
      return;
    }
    if (currentSum > target) {
      // 剪枝
      return;
    }

    for (let i = start; i < n; i++) {
      path.push(candidates[i]);
      backtrack(i, currentSum + candidates[i]); // 传入新的和
      path.pop();
    }
  }
};
// @lc code=end
