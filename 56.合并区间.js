/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0])
//   let index = 0
//   while (index < intervals.length - 1) {
//     if (intervals[index][1] >= intervals[index + 1][0]) {
//       if (intervals[index][1] <= intervals[index + 1][1]) {
//         intervals.splice(index, 2, [intervals[index][0], intervals[index + 1][1]])
//       } else {
//         intervals.splice(index, 2, [intervals[index][0], intervals[index][1]])
//       }
//     } else {
//       index++
//     }
//   }
//   return intervals
// };

var merge = function (intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = res[res.length - 1];
    if (last[1] >= intervals[i][0]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};
// @lc code=end

