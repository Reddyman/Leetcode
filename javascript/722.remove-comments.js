/*
 * @lc app=leetcode id=722 lang=javascript
 *
 * [722] Remove Comments
 */

// @lc code=start
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  // NOTE: Revisit when wiser
  return source.join("'").replace(/(\/\*.*?\*\/|\/\/[^']+)/g, "").split("'").filter(key => key.length);
};
// @lc code=end

