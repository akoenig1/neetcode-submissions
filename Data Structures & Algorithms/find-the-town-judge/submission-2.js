class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const trusteesOf = Array(n+1).fill(0);
        const trusts = Array(n+1).fill(0);

        for (const [truster, trustee] of trust) {
            trusteesOf[truster]++;
            trusts[trustee]++;
        }

        for (let i = 1; i <= n; i++) {
            if (
                trusts[i] === n - 1 &&
                trusteesOf[i] === 0
            ) return i;
        }

        return -1;
    }
}
