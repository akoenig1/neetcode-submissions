class TrieNode {
    constructor() {
        this.children = {};
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
            if (!node.children[c]) node.children[c] = new TrieNode();
            node = node.children[c];
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
     * @param {number} i
     * @param {node} TrieNode
     * @return {boolean}
     */
    dfs(word, i, node) {
        if (i === word.length) return node.endOfWord;

        const c = word[i];
        if (c === '.') {
            for (const key in node.children) {
                if (this.dfs(word, i+1, node.children[key])) return true;
            }
            return false;
        } else {
            if (!node.children[c]) return false;
            return this.dfs(word, i+1, node.children[c]);
        }
    }
}
