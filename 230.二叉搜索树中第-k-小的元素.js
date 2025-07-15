/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第 K 小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  let res = null;
  inOrder(root);
  return res;

  function inOrder(node) {
    if (!node || res !== null) return;

    inOrder(node.left);

    count++;
    if (count == k) {
      res = node.val;
      return;
    }

    inOrder(node.right);
  }
};
// @lc code=end
