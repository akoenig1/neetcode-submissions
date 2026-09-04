class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        for (let i = 0; i < s.length; i++) {
            const alteredStr = s.slice(0, i) + s.slice(i + 1);
            if (this.isPalindrome(alteredStr)) return true;
        }

        return this.isPalindrome(s);
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
