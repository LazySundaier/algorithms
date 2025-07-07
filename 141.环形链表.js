/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * 假设环的长度为 L，当慢指针进入环时：
 *    每轮快指针比慢指针多走1步
 *    相对距离每轮减少1
 *    最多 L 轮后必定相遇
 */
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) return true
  }
  return false
};
// @lc code=end

