/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var simplifyPath = function(path) {
  // O(n) time
  // O(n) space
  let simplifiedPath = []
  let pathList = path.split("/").filter(v => v !== "" && v !== ".")
  for (let i = 0; i < pathList.length; i++) {
    let c = pathList[i]
    if (c === "..") {
      simplifiedPath.pop()
    } else {
      simplifiedPath.push(c)
    }
  }
  return "/" + simplifiedPath.join("/")
};
// @lc code=end

