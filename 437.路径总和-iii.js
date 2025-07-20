/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
// var pathSum = function (root, targetSum) {
//   let count = 0;
//   path(root, 0, 0);
//   return count;
//   //只考虑了从root节点开始的路径
//   function path(root, sum) {
//     if (!root) return;
//     if (root.val == targetSum) count++;
//     sum += root.val;
//     if (sum == targetSum) count++;
//     path(root.left, sum);
//     path(root.right, sum);
//   }
// };
var pathSum = function (root, targetSum) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1); // 前缀和为0的路径有1条（从根节点开始）

  function dfs(node, currentSum) {
    if (!node) return 0;

    currentSum += node.val;

    // 查找是否存在前缀和为 currentSum - targetSum 的路径
    const count = prefixSumCount.get(currentSum - targetSum) || 0;

    // 更新前缀和计数
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);

    // 递归处理左右子树
    const result =
      count + dfs(node.left, currentSum) + dfs(node.right, currentSum);

    // 回溯：移除当前节点的前缀和
    //确保哈希表中只包含当前路径上的前缀和，避免不同分支间的干扰
    //左子树访问完成后，其前缀和被清理，不会影响右子树
    //每次递归返回时，恢复到递归前的状态
    prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) - 1);

    return result;
  }

  return dfs(root, 0);
};
// @lc code=end
