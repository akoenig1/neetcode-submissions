class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '');

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
