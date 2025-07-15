/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

//只比较了根节点与直接子节点，但BST要求所有左子树节点都小于根节点，所有右子树节点都大于根节点
// var isValidBST = function (root) {
//   let left = root.left;
//   let right = root.right;
//   if (!root) return true;
//   if (!root.left && !root.right) return true;
//   if (
//     root.val > (left?.val || -Infinity) &&
//     root.val < (right?.val || Infinity)
//   ) {
//     return isValidBST(root.left) && isValidBST(root.right);
//   } else return false;
// };

var isValidBST = function (root) {
  function validate(node, min, max) {
    if (!node) return true;

    // 检查当前节点是否在有效范围内
    if (node.val <= min || node.val >= max) {
      return false;
    }

    // 递归验证左右子树
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
};
// @lc code=end
