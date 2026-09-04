class TrieNode {
    constructor() {
        this.chars = {};
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;
        for (const c of word) {
            if (!node.chars[c]) node.chars[c] = new TrieNode();
            node = node.chars[c];
        }
        node.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    /**
     * @param {string} word
     * @param {node} TrieNode
     * @return {boolean}
     */
    dfs(word, i, node) {
        if (i === word.length) return node.endOfWord;
        const c = word[i];
        if (c === '.') {
            for (const key in node.chars) {
                if (this.dfs(word, i+1, node.chars[key])) return true;
            }
            return false;
        } else {
            if (!node.chars[c]) return false;
            return this.dfs(word, i+1, node.chars[c]);
        }
    }
}
