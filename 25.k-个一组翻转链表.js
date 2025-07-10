/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head.next == null) return head
  let count = k
  const dummy = new ListNode(null)
  let left = dummy
  let right = head
  let flag = true
  let res = null

  while (hasMore(right, k)) {
    let first = right
    let pre = left
    while (count) {
      let next = right.next
      right.next = left
      left = right
      right = next
      count--
    }
    first.next = right
    pre.next = left
    count = k
    if (flag) {
      res = left
      flag = false
    }
    left = first
  }

  return res

  function hasMore(first, k) {
    for (let i = 0; i < k - 1; i++) {
      first = first?.next
    }
    return !!first
  }

};
// @lc code=end

