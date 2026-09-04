class TrieNode {
    constructor() {
        this.chars = {};
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let node = this.root;
        for (const c of word) {
            if (!node.chars[c]) return false;
            node = node.chars[c];
        }
        return node.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (const c of prefix) {
            if (!node.chars[c]) return false;
            node = node.chars[c];
        }
        return true;
    }
}
