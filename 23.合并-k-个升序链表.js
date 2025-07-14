/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 1) return lists[0];
  if (lists.length == 0) return null;
  // const res = lists;
  // while (res.length > 1) {
  //   const list1 = res.shift();
  //   const list2 = res.shift();
  //   const mergedList = merge(list1, list2);
  //   res.unshift(mergedList);
  // }
  // return res[0];

  //分治法
  return mergeHelper(lists, 0, lists.length - 1);

  function mergeHelper(lists, left, right) {
    if (left === right) return lists[left];

    const mid = Math.floor((left + right) / 2);
    const l1 = mergeHelper(lists, left, mid);
    const l2 = mergeHelper(lists, mid + 1, right);

    return merge(l1, l2);
  }

  function merge(list1, list2) {
    let p = list1;
    let q = list2;
    const dummy = new ListNode(0);
    let current = dummy;
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
    return dummy.next;
  }
};
// @lc code=end
