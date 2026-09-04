class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const canEat = (k) => {
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / k);
                if (hours > h) return false;
            }
            return true;
        }
        
        let l = 1;
        let r = Math.max(...piles);

        while (l <= r) {
            const k = Math.floor(l + (r - l) / 2);
            if (canEat(k)) {
                r = k - 1;
            } else {
                l = k + 1;
            }
        }

        return l;
    }
}
