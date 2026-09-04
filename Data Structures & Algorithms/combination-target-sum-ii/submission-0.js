class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];

        const backtrack = (sum, i, curr) => {
            if (sum === target) {
                res.push([...curr]);
                return;
            }
            if (sum > target || i === candidates.length) return;

            backtrack(sum + candidates[i], i+1, [...curr, candidates[i]]);
            while (i+1 < candidates.length && candidates[i] === candidates[i+1]){ 
                i++;
            }
            backtrack(sum, i+1, curr);
        }

        candidates.sort((a, b) => a - b);
        backtrack(0, 0, []);

        return res;
    }
}
