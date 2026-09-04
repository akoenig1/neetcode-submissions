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

        let start = 0;
        let end = 0;
        while (start < S.length) {
            const c = S[start];

            let i = start;
            end = lastIndexOf[c];
            while (i < end) {
                const c = S[i];
                end = Math.max(end, lastIndexOf[c]);
                i++;
            }

            res.push(end - start + 1);
            start = end + 1;
        }

        return res;    
    }
}
