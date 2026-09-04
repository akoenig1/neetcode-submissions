class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);

        const calcHours = (k) => {
            let hours = 0;
            for (const p of piles) {
                hours += Math.ceil(p / k);
            }
            return hours;
        }
        
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const hours = calcHours(mid);
            if (hours <= h) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
