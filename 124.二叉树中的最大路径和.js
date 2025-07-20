/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
// var maxPathSum = function (root) {
//   if (!root) return null;
//   const leftMaxSum = maxPathSum(root.left);
//   const rightMaxSum = maxPathSum(root.right);
//   max = Math.max(root.val, root.val + leftMaxSum + rightMaxSum);
// };
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  maxGain(root);
  return maxSum;

  function maxGain(node) {
    if (!node) return 0;

    // 计算左右子树的最大贡献值（负数时取0）
    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);

    // 当前节点为根的最大路径和
    const currentMaxPath = node.val + leftGain + rightGain;

    // 更新全局最大值
    maxSum = Math.max(maxSum, currentMaxPath);

    // 返回当前节点能向上贡献的最大值
    return node.val + Math.max(leftGain, rightGain);
  }
};
// @lc code=end
