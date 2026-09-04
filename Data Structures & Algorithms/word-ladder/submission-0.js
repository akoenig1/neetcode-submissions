class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const words = new Set(wordList);
        const visited = new Set();
        const q = new Queue();

        q.enqueue([beginWord, 1]);
        while (q.size() > 0) {
            const [word, num] = q.dequeue();

            if (word === endWord) return num;

            visited.add(word);

            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const c = String.fromCharCode('a'.charCodeAt(0) + j);
                    const newWord = word.substring(0, i) + c + word.substring(i+1);
                    
                    if (words.has(newWord) && !visited.has(newWord)) {
                        q.enqueue([newWord, num + 1]);
                    }
                }
            }
        }

        return 0;
    }
}
