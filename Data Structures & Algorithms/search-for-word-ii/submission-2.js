class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let node = this.root;
        for (const c of word) {
            if (!node.children[c]) node.children[c] = new TrieNode();
            node = node.children[c];
        }
        node.endOfWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const res = new Set();

        const trie = new Trie();
        for (const word of words) {
            trie.add(word);
        }

        const ROWS = board.length;
        const COLS = board[0].length;
        const visited = new Set();
        const dfs = (r, c, node, word) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                visited.has(`${r},${c}`)
            ) return false;

            const char = board[r][c];
            if (!node.children[char]) return;
            word += char;

            if (node.children[char].endOfWord) {
                res.add(word);
            }

            visited.add(`${r},${c}`);

            dfs(r + 1, c, node.children[char], word);
            dfs(r - 1, c, node.children[char], word);
            dfs(r, c + 1, node.children[char], word);
            dfs(r, c - 1, node.children[char], word);

            visited.delete(`${r},${c}`);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, trie.root, '');
            }
        }
        
        return Array.from(res);
    }
}
