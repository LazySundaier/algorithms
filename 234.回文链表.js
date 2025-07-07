/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;
  let stack = [];

  // 快慢指针找中点，同时将前半部分压栈
  //什么时候终止很重要
  //要保证fast.next.next存在
  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // 如果链表长度为奇数，跳过中间节点
  if (fast) {
    slow = slow.next;
  }

  // 比较后半部分与栈中的元素
  while (slow) {
    if (slow.val !== stack.pop()) {
      return false;
    }
    slow = slow.next;
  }
  return true
};
// @lc code=end

