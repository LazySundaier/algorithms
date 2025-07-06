/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function (headA, headB) {
//   let p = headA
//   let q = headB
//   while (!(p == null && q == null)) {
//     if (p == q) {
//       return p
//     }
//     // if (p == null) p = headB
//     // if (q == null) q = headA
//     // p = p.next
//     // q = q.next
//     p = p ? p.next : headB
//     q = q ? q.next : headA
//   }
//   return null
// };

var getIntersectionNode = function (headA, headB) {
  let p = headA;
  let q = headB;

  while (p !== q) {
    p = p ? p.next : headB;  // p走完A链表后走B链表
    q = q ? q.next : headA;  // q走完B链表后走A链表
  }

  return p;  // 相交点或null
};
// @lc code=end

