/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];
  const path = [];

  function backtrack(index) {
    // 递归终止条件
    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }

    // 获取当前数字对应的字母
    const letters = digitToLetters[digits[index]];

    // 遍历当前数字的所有字母
    for (const letter of letters) {
      path.push(letter); // 选择
      // 用index来选择数字对应的字符串
      backtrack(index + 1); // 递归下一位数字
      path.pop(); // 撤销选择
    }
  }

  backtrack(0);
  return result;
};
// @lc code=end
