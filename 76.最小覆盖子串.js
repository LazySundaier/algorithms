/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//关键在于怎么判断存在满足t的子串====>count的计算方法
var minWindow = function (s, t) {
  if (s.length === 0 || t.length === 0) return "";

  // 统计 t 中每个字符的需求
  const need = {};
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  let left = 0, right = 0;
  let count = 0; // 已经满足的字符数
  let minLen = Infinity, start = 0;
  const window = {};

  while (right < s.length) {
    let c = s[right];
    //window记录窗口内所有字符的出现次数
    window[c] = (window[c] || 0) + 1;
    //t中需要这个字符并且窗口内这个字符的数量不够
    if (need[c] && window[c] <= need[c]) {
      count++;
    }
    right++;

    // 当窗口内包含 t 所有字符
    while (count === t.length) {
      if (right - left < minLen) {
        minLen = right - left;
        start = left;
      }
      let d = s[left];
      //t中需要这个字符并且窗口内这个字符的数量-1之后就不能满足t了
      if (need[d] && window[d] <= need[d]) {
        //count-1,这样窗口内就不存在满足t的子串了,跳出循环,窗口向右扩大
        count--;
      }
      window[d]--;
      left++;
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
};
// @lc code=end

