class TrieNode {
    constructor() {
        this.chars = {};
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
            if (!node.chars[c]) node.chars[c] = new TrieNode();
            node = node.chars[c];
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

        const dfs = (r, c, node, visited, word) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                visited.has(`${r},${c}`)
            ) return;

            const char = board[r][c];
            if (!node.chars[char]) return;
            word += char;

            if (node.chars[char].endOfWord) res.add(word);

            visited.add(`${r},${c}`);

            dfs(r-1, c, node.chars[char], visited, word);
            dfs(r+1, c, node.chars[char], visited, word);
            dfs(r, c-1, node.chars[char], visited, word);
            dfs(r, c+1, node.chars[char], visited, word);

            visited.delete(`${r},${c}`);
        }

        const ROWS = board.length;
        const COLS = board[0].length;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, trie.root, new Set(), '');
            }
        }

        return [...res];
    }
}
