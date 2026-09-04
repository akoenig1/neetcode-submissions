class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const backtrack = (i, substrs) => {
            if (i === s.length) {
                res.push([...substrs]);
                return;
            }

            for (let j = i; j < s.length; j++) {
                const substr = s.substring(i, j+1);
                if (this.isPalindrome(substr)) {
                    substrs.push(substr);
                    backtrack(j + 1, substrs);
                    substrs.pop();
                }
            }
        }

        backtrack(0, [])
        return res;
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l <= r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
