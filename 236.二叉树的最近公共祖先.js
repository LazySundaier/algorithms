/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 基础情况：如果到达叶子节点或找到目标节点
  if (!root || root === p || root === q) {
    return root;
  }

  // 在左右子树中寻找p和q
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果左右子树都找到了节点，说明当前节点是LCA
  if (left && right) {
    return root;
  }

  // 否则返回非空的那个子树结果
  return left || right;
};

// 考虑这个例子：
//       3
//      / \
//     5   1
//    / \   \
//   6   2   8
//      / \
//     7   4

// 寻找p=7, q=4的LCA

// 1. lowestCommonAncestor(3, 7, 4)
//    ├─ left = lowestCommonAncestor(5, 7, 4)
//    │   ├─ left = lowestCommonAncestor(6, 7, 4) → null
//    │   └─ right = lowestCommonAncestor(2, 7, 4)
//    │       ├─ left = lowestCommonAncestor(7, 7, 4) → 7 ✓
//    │       └─ right = lowestCommonAncestor(4, 7, 4) → 4 ✓
//    │       └─ left && right → 返回节点2 (LCA!)
//    │   └─ 返回节点2
//    └─ right = lowestCommonAncestor(1, 7, 4) → null
//    └─ left=2, right=null → 返回节点2
// @lc code=end
