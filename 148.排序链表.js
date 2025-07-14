/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  if (!head || !head.next) return head;

  // 找到中点并分割链表
  const mid = getMid(head);
  const left = head;
  const right = mid.next;
  mid.next = null; // 断开链表

  // 递归排序左右两部分
  const sortedLeft = sortList(left);
  const sortedRight = sortList(right);

  // 合并两个有序链表
  return merge(sortedLeft, sortedRight);
};

// 找到链表中点
function getMid(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return prev; // 返回中点的前一个节点
}

// 合并两个有序链表
function merge(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;
  return dummy.next;
}
// @lc code=end
