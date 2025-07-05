/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//超时了
// const compare = (a, b) => {
//   const arr1 = Array.from(a).map(item => item.charCodeAt(0))
//   const arr2 = Array.from(b).map(item => item.charCodeAt(0))
//   arr1.sort((a, b) => a - b)
//   arr2.sort((a, b) => a - b)
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false
//   }
//   return true
// }
// var findAnagrams = function (s, p) {
//   let right = p.length - 1
//   let res = []
//   for (let left = 0; right < s.length; left++, right++) {
//     if (compare(s.substring(left, right + 1), p)) res.push(left)
//   }
//   return res
// };

function compare(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
var findAnagrams = function (s, p) {
  let right = p.length - 1
  let res = []

  const pCount = new Array(26).fill(0)
  const windowCount = new Array(26).fill(0)

  for (let char of p) {
    pCount[char.charCodeAt(0) - 97]++
  }

  for (let char of s.substring(0, p.length)) {
    windowCount[char.charCodeAt(0) - 97]++
  }
  if (compare(pCount, windowCount)) res.push(0)

  for (let left = 0; right < s.length; left++) {
    windowCount[s.charCodeAt(left) - 97]--
    windowCount[s.charCodeAt(++right) - 97]++
    if (compare(pCount, windowCount)) res.push(left + 1)
  }
  return res
};
// @lc code=end

