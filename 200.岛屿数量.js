/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(i, j) {
    // 边界检查和水域检查
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0") {
      return;
    }

    // 标记当前陆地为已访问
    grid[i][j] = "0";

    // 递归搜索四个方向
    dfs(i + 1, j); // 下
    dfs(i - 1, j); // 上
    dfs(i, j + 1); // 右
    dfs(i, j - 1); // 左
  }

  // 遍历整个网格
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j); // 将整个岛屿沉没
      }
    }
  }

  return count;
};
// @lc code=end
