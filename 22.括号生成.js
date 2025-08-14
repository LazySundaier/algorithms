/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function backtrack(current, left, right) {
    // 终止条件：括号用完了
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // 添加左括号：只要没超过n个
    if (left < n) {
      //回溯结束的时候,上层的回溯的current是原来的,就是pop
      backtrack(current + "(", left + 1, right);
    }

    // 添加右括号：只要右括号数量少于左括号
    if (right < left) {
      backtrack(current + ")", left, right + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
};
// @lc code=end
var generateParenthesis = function (n) {
  const result = [];
  const path = [];

  function backtrack(left, right) {
    if (path.length === 2 * n) {
      result.push(path.join(""));
      return;
    }

    if (left < n) {
      path.push("(");
      backtrack(left + 1, right);
      path.pop();
    }

    if (right < left) {
      path.push(")");
      backtrack(left, right + 1);
      path.pop();
    }
  }

  backtrack(0, 0);
  return result;
};
