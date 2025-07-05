/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//是可以通过的
// var lengthOfLongestSubstring = function (s) {
//   if (s.length == 1) return 1
//   let left = 0
//   let right = 1
//   let max = 0
//   let set = new Set()
//   set.add(s[left])
//   while (right < s.length) {
//     if (set.has(s[right])) {
//       left++
//       right = left + 1
//       max = Math.max(max, Array.from(set.values()).length)
//       set.clear()
//       set.add(s[left - 1])
//       set.add(s[right - 1])
//     } else {
//       set.add(s[right])
//       max = Math.max(max, Array.from(set.values()).length)
//       // console.log(max);
//       right++
//     }
//   }
//   return max
// };

var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLen = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    // 如果遇到重复字符，收缩左边界
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    // 添加当前字符
    charSet.add(s[right]);

    // 更新最大长度
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
// @lc code=end

