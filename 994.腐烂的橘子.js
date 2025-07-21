/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const queue = [];
  let count = -1;
  let allZero = true;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 2) queue.push({ x: i, y: j });
      if (grid[i][j] == 1) allZero = false;
    }
  }

  if (allZero) return 0;

  while (queue.length > 0) {
    const n = queue.length;
    count++;
    for (let i = 0; i < n; i++) {
      const item = queue.shift();
      rot(item.x - 1, item.y);
      rot(item.x + 1, item.y);
      rot(item.x, item.y - 1);
      rot(item.x, item.y + 1);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) return -1;
    }
  }
  return count;

  function rot(i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] != 1) return;
    else {
      grid[i][j] = 2;
      queue.push({ x: i, y: j });
    }
  }
};
// @lc code=end
