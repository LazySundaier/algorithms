/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return toBST(0, nums.length - 1);

  function toBST(start, end) {
    // if (end - start == 1) return new TreeNode(nums[0]);
    if (start > end) return null;
    const index = Math.floor((end + start) / 2);
    const root = new TreeNode(nums[index]);
    root.left = toBST(start, index - 1);
    root.right = toBST(index + 1, end);
    return root;
  }
};
// @lc code=end
