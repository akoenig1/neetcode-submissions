class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        const canShip = (cap) => {
            let currDays = 1;
            let currWeight = 0;
            for (const w of weights) {
                if (currWeight + w <= cap) {
                    currWeight += w;
                } else {
                    currWeight = w;
                    currDays++;
                }
                if (currDays > days) return false;
            }

            return true;
        }


        let l = Math.max(...weights);
        let r = weights.reduce((a, b) => a + b, 0);
        
        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            if (canShip(mid)) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
