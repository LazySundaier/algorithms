/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function (nums) {
//   const set = new Set()
//   for (let num of nums) {
//     if (num <= 0) continue
//     set.add(num)
//   }
//   if (!set.has(1)) return 1
//   let minPositive = 1
//   console.log(set);
//   //没法判断正数全部连续的情况
//   for (let num of nums) {
//     if (num <= 0) continue
//     if (!set.has(num + 1)) {
//       minPositive = Math.min(minPositive, num + 1)
//     }
//     console.log(num, minPositive);

//   }
//   return minPositive
// };

var firstMissingPositive = function (nums) {
  const set = new Set()
  for (let num of nums) {
    if (num > 0) set.add(num);
  }
  if (!set.has(1)) return 1
  // let minPositive = 0
  // for (let i = 0; i < set.size; i++) {
  //   if (!set.has(minPositive + 1)) return minPositive + 1
  //   else minPositive++
  // }
  // return minPositive + 1

  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
}

// @lc code=end

