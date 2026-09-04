class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        let start = 0;
        let end = str.length - 1;

        while (start <= end) {
            if(str[start] !== str[end]) return false;
            start++;
            end--;
        }
        
        return true;
    }
}
