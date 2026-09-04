class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];
        
        let res = [""];
        const charMap = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        }

        for (const digit of digits) {
            const tmp = [];
            for (const str of res) {
                for (const char of charMap[digit]) {
                    tmp.push(str + char);
                }
            }
            res = tmp;
        }

        return res;
    }
}
