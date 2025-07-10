/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head?.next == null || head == null) return head
  let dummy = new ListNode(0)
  dummy.next = head
  let left = dummy
  let right = head.next
  do {
    left.next.next = right.next
    right.next = left.next
    left.next = right
    left = left.next.next
    right = right.next.next?.next
  } while (left.next?.next)
  return dummy.next
};
// @lc code=end

