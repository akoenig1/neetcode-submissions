class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const [at, bt, ct] = target;

        triplets = triplets.filter(([ai, bi, ci]) => 
            ai <= at && bi <= bt && ci <= ct
        );
        if (triplets.length === 0) return false;

        triplets = triplets.reduce(([ai, bi, ci], [aj, bj, cj]) => 
            [Math.max(ai, aj), Math.max(bi, bj), Math.max(ci, cj)],
            triplets[0]
        );
        
        const [ai, bi, ci] = triplets;
        return ai === at && bi === bt && ci === ct;
    }
}
