class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let fives = 0;
        let tens = 0;

        for (const bill of bills) {
            if (bill === 5) {
                fives++;
            } else if (bill === 10) {
                tens++;
                fives--;
            } else if (bill === 20) {
                if (tens > 0) {
                    tens--;
                    fives--;
                } else {
                    fives -= 3;
                }
            }

            if (fives < 0 || tens < 0) {
                return false;
            }
        }

        return true;
    }
}
