/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   const mapArr = []
//   for (let i = 0; i < strs.length; i++) {
//     let map = new Map()
//     for (let j = 0; j < strs[i].length; j++) {
//       if (map.has(strs[i][j]))
//         map.set(strs[i][j], map.get(strs[i][j]) + 1)
//       else
//         map.set(strs[i][j], 1)
//     }
//     mapArr.push(map)
//   }
//   //怎么比较
//   //无法比较


// };

var groupAnagrams = function (strs) {
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    const sortStr = strs[i].split('').sort().join('')
    if (map.has(sortStr)) {
      // map.set(sortStr, [...map.get(sortStr), strs[i]])
      map.get(sortStr).push(strs[i])
    } else {
      map.set(sortStr, [strs[i]])
    }
  }
  // let arr = []
  // map.forEach((item) => {
  //   arr.push(item)
  // })
  // return arr
  return Array.from(map.values())
}

/**
 * console.log(map.values()) // MapIterator {['eat', 'tea', 'ate'], ['tan',    'nat']}
 * 解构也可以
 * [...map.values()]
 */
// @lc code=end

