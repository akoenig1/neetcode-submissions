class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const n = words.length;

        for (let i = 0; i < n - 1; i++) {
            const word = words[i];
            const nextWord = words[i+1];

            for (let j = 0; j < word.length; j++) {
                const char = word[j];
                const nextWordChar = nextWord[j];
                const charIndex = order.indexOf(char);
                const nextWordCharIndex = order.indexOf(nextWordChar);

                if (charIndex < nextWordCharIndex) {
                    break;
                } else if (charIndex > nextWordCharIndex) {
                    return false;
                } 
            }
        }

        return true;
    }
}
