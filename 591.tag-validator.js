/*
 * @lc app=leetcode id=591 lang=javascript
 *
 * [591] Tag Validator
 */

// @lc code=start
/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  // NOTE: Revisit when wiser and better with REGEX
  // Iteratively simplify the input with regex capture groups
  // Previous approach involved tedious indexOf/startOf
  // O(n) time
  // O(n) space

  if (code === 't') return false;
  while (/<!\[CDATA\[.*?\]\]>/.test(code)) {
      code = code.replace(/<!\[CDATA\[.*?\]\]>/g, 'c');
  }

  while (/<([A-Z]{1,9})>([^<]*)<\/(\1)>/.test(code)) {
      code = code.replace(/<([A-Z]{1,9})>([^<]*)<\/(\1)>/g, 't');
  }

  return code === 't';
};
// @lc code=end

