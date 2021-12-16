/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode {
  constructor() {
    this.children = new Map()
    this.isWord = false
  }
}

class TrieTree {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    // DFS
    let currNode = this.root
    for (let char of word) {
      if (currNode.children.has(char)) {
        // traverse
        currNode = currNode.children.get(char)
      } else {
        // add
        let newNode = new TrieNode()
        currNode.children.set(char, newNode)
        currNode = newNode
      }
    }
    currNode.isWord = true
  }

  isPrefix(prefix) {
    // DFS
    let currNode = this.root
    for (let char of prefix) {
      if (currNode.children.has(char)) {
        currNode = currNode.children.get(char)
      } else {
        return false
      }
    }
    return true
  }

  search(word) {
    // DFS
    let currNode = this.root
    for (let char of word) {
      if (currNode.children.has(char)) {
        currNode = currNode.children.get(char)
      } else {
        return false
      }
    }
    return currNode.isWord
  }
}

let deepCopyMatrix = (mat) => {
  let matCopy = []
  for (let row of mat) {
    matCopy.push([...row])
  }
  return matCopy
}

var findWords = function(board, words) {
  // DFS at every element
  // Use bool matrix to prevent double count
  // Use trie to speed up word matching
  // O((m + n) * log(l)) time
  // O((m + n)) space

  // Build trie
  let trie = new TrieTree()
  for (let word of words) {
    trie.insert(word)
  }
  let foundWords = []
  let m = board.length
  let n = board[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // implement with trie
      let rWord = board[i][j]
      if (trie.isPrefix(rWord)) {
        // DFS
        let stack = []
        let boolBoard = new Array(m).fill()
                            .map(() => new Array(n).fill(false))
        stack.push([i, j, rWord, boolBoard])
        while (stack.length > 0) {
          let vals = stack.pop()
          let row = vals[0]
          let col = vals[1]
          rWord = vals[2]
          boolBoard = vals[3]
          // base cases
          if (boolBoard[row] !== undefined &&
              boolBoard[row][col]) continue
          if (trie.search(rWord)) {
            if (!foundWords.reduce((acc, v) => acc = (acc || v === rWord), false)) {
              foundWords.push(rWord)
            }
          }
          boolBoard[row][col] = true
          // UDLR
          let up    = row - 1
          let down  = row + 1
          let left  = col - 1
          let right = col + 1
          // look up
          if (board[up] !== undefined &&
              trie.isPrefix(rWord + board[up][col])) {
            // NOTE: boolBoard must be passed by value, not reference...
            let boolBoardCopy = deepCopyMatrix(boolBoard)
            stack.push([up, col,
                        rWord + board[up][col],
                        boolBoardCopy])
          }
          // look down
          if (board[down] !== undefined &&
              trie.isPrefix(rWord + board[down][col])) {
            // NOTE: boolBoard must be passed by value, not reference...
            let boolBoardCopy = deepCopyMatrix(boolBoard)
            stack.push([down, col,
                        rWord + board[down][col],
                        boolBoardCopy])
          }
          // look left
          if (board[row][left] !== undefined &&
              trie.isPrefix(rWord + board[row][left])) {
            // NOTE: boolBoard must be passed by value, not reference...
            let boolBoardCopy = deepCopyMatrix(boolBoard)
            stack.push([row, left,
                        rWord + board[row][left],
                        boolBoardCopy])
          }
          // look right
          if (board[row][right] !== undefined &&
              trie.isPrefix(rWord + board[row][right])) {
            // NOTE: boolBoard must be passed by value, not reference...
            let boolBoardCopy = deepCopyMatrix(boolBoard)
            stack.push([row, right,
                        rWord + board[row][right],
                        boolBoardCopy])
          }
        }
      }
    }
  }

  return foundWords
};
// @lc code=end


console.log(
  findWords(
    [
      ["o","a","a","n"],
      ["e","t","a","e"],
      ["i","h","k","r"],
      ["i","f","l","v"]
    ],
    ["oath","pea","eat","rain","oathi","oathk","oathf","oate","oathii","oathfi","oathfii"]
  )
)

console.log(
  findWords(
    [
      ["o","a","a","n"],
      ["e","t","a","e"],
      ["i","h","k","r"],
      ["i","f","l","v"]
    ],
    ["oath","pea","eat","rain","hklf", "hf"]
  )
)

console.log(
  findWords(
    [
      ["a","a"]
    ],
    ["aaa"]
  )
)

console.log(
  findWords(
    [
      ["a","a"]
    ],
    ["aa"]
  )
)

console.log(
  findWords(
    [
      ["o","a","a","n"],
      ["e","t","a","e"],
      ["i","h","k","r"],
      ["i","f","l","v"]
    ],
    ["oath","pea","eat","rain"]
  )
)

console.log(
  findWords(
    [
      ["a"]
    ],
    ["a"]
  )
)

console.log(
  findWords(
    [
      ["o","a","b","n"],
      ["o","t","a","e"],
      ["a","h","k","r"],
      ["a","f","l","v"]
    ],
    ["oa", "oaa"]
  )
)