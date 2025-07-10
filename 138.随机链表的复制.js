/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  // 步骤1：在每个节点后插入复制节点
  let curr = head;
  while (curr) {
    const newNode = new _Node(curr.val);
    newNode.next = curr.next;
    curr.next = newNode;
    curr = newNode.next;
  }

  // 步骤2：设置复制节点的 random 指针
  curr = head;
  while (curr) {
    if (curr.random) {
      curr.next.random = curr.random.next;
    }
    curr = curr.next.next;
  }

  // 步骤3：分离原链表和复制链表
  const dummy = new _Node(0);
  let prev = dummy;
  curr = head;

  while (curr) {
    const newNode = curr.next;
    curr.next = newNode.next;
    prev.next = newNode;
    prev = newNode;
    curr = curr.next;
  }

  return dummy.next;
};

var copyRandomList = function (head) {
  if (!head) return null;

  const map = new Map();
  let curr = head;

  // 第一遍：创建所有节点并建立映射
  while (curr) {
    map.set(curr, new _Node(curr.val));
    curr = curr.next;
  }

  // 第二遍：连接 next 和 random 指针
  curr = head;
  while (curr) {
    const newNode = map.get(curr);
    newNode.next = curr.next ? map.get(curr.next) : null;
    newNode.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
  }

  return map.get(head);
};
// @lc code=end

