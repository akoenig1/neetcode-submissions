class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let numBoats = 0;

        let l = 0;
        let r = people.length - 1;
        while (l <= r) {
            numBoats++;
            if (people[l] + people[r] <= limit) {
                l++;
            }
            r--;
        }

        return numBoats;
    }
}
