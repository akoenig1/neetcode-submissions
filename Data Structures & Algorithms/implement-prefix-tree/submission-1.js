class TrieNode {
    constructor(val) {
        this.val = val;
        this.endOfWord = false;
        this.next = {};
    }
}

class PrefixTree {
    constructor() {
        this.trie = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.trie;
        for (const c of word) {
            if (!node.next[c]) node.next[c] = new TrieNode(c);
            node = node.next[c];
        }
        node.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.trie;
        for (const c of word) {
            if (!node.next[c]) return false;
            node = node.next[c];
        }
        return node.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.trie;
        for (const c of prefix) {
            if (!node.next[c]) return false;
            node = node.next[c];
        }
        return true;
    }
}
