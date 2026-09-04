class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const rank = {};
        for (let i = 0; i < order.length; i++) {
            const c = order[i];
            rank[c] = i;
        }
        
        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i+1];

            for (let j = 0; j < word1.length; j++) {
                if (j === word2.length) return false;
                
                const c1 = word1[j];
                const c2 = word2[j];
                const order1 = rank[c1];
                const order2 = rank[c2];

                if (order1 < order2) {
                    break;
                } else if (order1 > order2) {
                    return false;
                }
            }
        }

        return true;
    }
}
