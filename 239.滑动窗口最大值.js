/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//窗口的向右移动就是对应队列的出队列,进队列这两个动作
//一个是索引,一个是索引对应的数组值
var maxSlidingWindow = function (nums, k) {
  const res = []
  const deQueue = []

  for (let i = 0; i < nums.length; i++) {
    //队列是存储索引的,索引本身一定是单调递增的,因为是队列,先进先出

    //每次只向右移动一个
    if (deQueue.length > 0 && deQueue[0] <= i - k) {
      deQueue.shift()
    }
    //超过一个的时候,就要批量移除窗口之外的索引
    while (deQueue.length > 0 && deQueue[0] <= i - k) {
      deQueue.shift();
    }

    //但是索引对应的数组值是单调递减的,保证队首索引的数组值是最大的
    while (deQueue.length > 0 && nums[deQueue[deQueue.length - 1]] < nums[i]) {
      deQueue.pop()
    }
    deQueue.push(i)

    //当窗口形成时，记录最大值
    if (i >= k - 1) {
      res.push(nums[deQueue[0]])
    }
  }

  return res
};
// @lc code=end

