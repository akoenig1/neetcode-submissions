class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const stripped = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let left = 0;
        let right = stripped.length - 1;

        while (left < right) {
            if (stripped[left] !== stripped[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
