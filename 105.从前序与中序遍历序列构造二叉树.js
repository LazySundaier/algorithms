/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inOrderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inOrderMap.set(inorder[i], i);
  }

  let preIndex = 0;

  return build(0, inorder.length - 1);

  function build(inStart, inEnd) {
    if (inStart > inEnd) return null;

    const rootVal = preorder[preIndex++];
    const root = new TreeNode(rootVal);

    const rootIndex = inOrderMap.get(rootVal);

    root.left = build(inStart, rootIndex - 1);
    root.right = build(rootIndex + 1, inEnd);
    return root;
  }
};
// @lc code=end
