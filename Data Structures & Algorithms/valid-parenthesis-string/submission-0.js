class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let minOpen = 0;
        let maxOpen = 0;

        for (const c of s) {
            if (c === '(') {
                minOpen++;
                maxOpen++;
            } else if (c === ')') {
                minOpen--;
                maxOpen--;
            } else {
                minOpen--;
                maxOpen++;
            }

            minOpen = Math.max(minOpen, 0);
            if (maxOpen < 0) return false;
        }

        return minOpen === 0;
    }
}
