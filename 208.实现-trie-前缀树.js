/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
  this.children = {}; // 根节点的子节点映射
  this.isEnd = false; // 根节点不是单词结尾
};

/**
 * @param {string} word
 * @return {void}
 */
// 逐字符遍历word，如果当前字符不存在于children，就新建一个节点。
// 最后一个字符节点的isEnd设为true，表示插入了一个完整单词。
Trie.prototype.insert = function (word) {
  let node = this;
  for (const ch of word) {
    if (!node.children[ch]) {
      node.children[ch] = { children: {}, isEnd: false };
    }
    node = node.children[ch];
  }
  node.isEnd = true; // 标记单词结尾
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this;
  for (const ch of word) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }
  return node.isEnd; // 必须是完整单词
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this;
  for (const ch of prefix) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }
  return true; // 只要能走到就行
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
