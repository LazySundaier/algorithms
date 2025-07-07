/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) break
  }
  if (!fast || !fast.next) return null

  slow = head;  // 重置slow到头部
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;  // 注意：fast现在每次只走一步
  }

  return slow;  // 返回环的起始节点
};
// @lc code=end

