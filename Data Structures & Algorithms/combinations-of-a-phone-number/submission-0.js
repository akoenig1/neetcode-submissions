class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        if (digits.length === 0) return res;

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

        const backtrack = (i, str) => {
            if (i === digits.length) {
                res.push(str);
                return;
            }

            const digit = digits[i];
            const chars = charMap[digit];
            for (const char of chars) {
                backtrack(i + 1, str + char);
            }
        }

        backtrack(0, "");

        return res;
    }
}
