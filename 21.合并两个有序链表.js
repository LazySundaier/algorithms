/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//   // 边界情况处理
//   if (!list1) return list2;
//   if (!list2) return list1;

//   // 确保list2的头节点更小，这样返回list2就是正确的头节点
//   if (list1.val < list2.val) {
//     [list1, list2] = [list2, list1];
//   }
//   let p = list1
//   let q = list2
//   // while (p.next && q.next) {
//   //   if (p.val >= q.val) {
//   //     let temp = q.next
//   //     q.next = p
//   //     p = p.next
//   //     q.next.next = temp
//   //     q = q.next
//   //   } else {
//   //     q = q.next
//   //   }
//   // }
//   while (p && q.next) {
//     if (p.val < q.next.val) {
//       // 将p插入到q和q.next之间
//       let temp = p.next;
//       p.next = q.next;
//       q.next = p;
//       p = temp;
//     } else {
//       q = q.next;
//     }
//   }
//   if (p) q.next = p
//   return list2
// };

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let p = list1
  let q = list2
  while (p && q) {
    if (p.val <= q.val) {
      current.next = p;
      p = p.next;
    } else {
      current.next = q;
      q = q.next;
    }
    current = current.next;
  }
  current.next = p || q;
  return dummy.next
}
// @lc code=end

