/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxDiameter = 0;
  depth(root);
  return maxDiameter;

  function depth(root) {
    if (!root) return 0;

    const leftDepth = depth(root.left);
    const rightDepth = depth(root.right);

    maxDiameter = Math.max(leftDepth + rightDepth, maxDiameter);

    return Math.max(leftDepth, rightDepth) + 1;
  }
};
// @lc code=end
