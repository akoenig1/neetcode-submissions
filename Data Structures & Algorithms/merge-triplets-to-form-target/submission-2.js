class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let a = false, b = false, c = false;
        
        const [at, bt, ct] = target;
        for (const [ai, bi, ci] of triplets) {
            a |= ai === at && bi <= bt && ci <= ct;
            b |= bi === bt && ai <= at && ci <= ct;
            c |= ci === ct && ai <= at && bi <= bt;
            if (a && b && c) return true;
        }
        
        return false;
    }
}
