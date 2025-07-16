/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let dummy = new TreeNode();
  let current = dummy;
  preOrder(root);

  function preOrder(root) {
    if (!root) return;
    // 先保存左右子树（因为下一次递归会修改这个节点的指针）
    const left = root.left;
    const right = root.right;

    current.right = root;
    current.left = null;
    current = root;
    preOrder(left);
    preOrder(right);
  }
};
// @lc code=end
