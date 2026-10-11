class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let fives = 0;      3
        let tens = 0;       0
        let twenties = 0;   1

        for (const bill of bills) {
            if (bill === 5) {
                fives++;
            } else if (bill === 10) {
                tens++;
                fives--;
            } else if (bill === 20) {
                twenties++;

                if (tens > 0) {
                    tens--;
                    fives--;
                } else {
                    fives -= 3;
                }

            }

            if (fives < 0 || tens < 0 || twenties < 0) {
                return false;
            }
        }

        return true;
    }
}
