class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize > 0) return false;
        
        const counts = new Map();
        for (const card of hand) {
            if (!counts.has(card)) counts.set(card, 0);
            counts.set(card, counts.get(card) + 1);
        }
        
        for (const card of hand) {
            let start = card;
            while (counts.get(start - 1) > 0) start--;
            while (start <= card) {
                while (counts.get(start) > 0) {
                    for (let i = start; i < start + groupSize; i++) {
                        if (!counts.get(i)) return false;
                        counts.set(i, counts.get(i) - 1);
                    }
                }
                start++;
            }
        }        

        return true;
    }
}
