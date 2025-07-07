/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0)
  let current = dummy
  let x = 0
  //如果最后还有进位,要追加一个最高位
  while (l1 || l2 || x) {
    // let sum
    // if (!l1 && l2) {
    //   sum = l2.val + x
    // } else if (l1 && !l2) {
    //   sum = l1.val + x
    // } else if (l1 && l2) {
    //   sum = l1.val + l2.val + x
    // } else {
    //   sum = x
    // }
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + x;
    current.next = new ListNode(sum % 10)
    // x = sum / 10
    x = Math.floor(sum / 10)
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    current = current.next
  }
  return dummy.next
};
// @lc code=end

