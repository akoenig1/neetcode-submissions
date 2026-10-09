class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const trusteesOf = Array.from({ length: n + 1 }, () => []);
        const trusts = Array.from({ length: n + 1}, () => []);

        for (const [truster, trustee] of trust) {
            trusteesOf[truster].push(trustee);
            trusts[trustee].push(truster);
        }

        for (let i = 1; i <= n; i++) {
            if (
                trusts[i].length === n - 1 &&
                trusteesOf[i].length === 0
            ) return i;
        }

        return -1;
    }
}
