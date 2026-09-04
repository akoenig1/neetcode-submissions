class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const res = [];
        
        const lastIndexOf = {};
        for (let i = S.length - 1; i >= 0; i--) {
            const c = S[i];
            if (!lastIndexOf[c]) lastIndexOf[c] = i;
        }

        let size = 0;
        let end = 0;
        for (let i = 0; i < S.length; i++) {
            size++;

            const c = S[i];
            end = Math.max(end, lastIndexOf[c]);

            if (i === end) {
                res.push(size);
                size = 0;
            }
        }

        return res;    
    }
}
