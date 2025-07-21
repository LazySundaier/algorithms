/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 构建邻接表
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  // 三种状态：0-未访问，1-正在访问，2-已完成
  const visited = new Array(numCourses).fill(0);

  function hasCycle(course) {
    if (visited[course] === 1) return true; // 发现环
    if (visited[course] === 2) return false; // 已检查过

    visited[course] = 1; // 标记为正在访问

    // 检查所有后续课程
    for (const nextCourse of graph[course]) {
      if (hasCycle(nextCourse)) return true;
    }

    visited[course] = 2; // 标记为已完成
    return false;
  }

  // 检查每个课程
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0 && hasCycle(i)) {
      return false;
    }
  }

  return true;
};

// 依赖关系：
// 0 → 1 → 3
// 0 → 2 → 3

// 图结构：
// 0: [1, 2]
// 1: [3]
// 2: [3]
// 3: []

// 从课程0开始
// visited[0] = 1 (灰色)
//   visited[1] = 1 (灰色)
//     visited[3] = 1 (灰色)
//     visited[3] = 2 (黑色) // 没有后续课程
//   visited[1] = 2 (黑色)
//   visited[2] = 1 (灰色)
//     // 3已经是黑色，跳过
//   visited[2] = 2 (黑色)
// visited[0] = 2 (黑色)
// 无环，返回true

// @lc code=end
