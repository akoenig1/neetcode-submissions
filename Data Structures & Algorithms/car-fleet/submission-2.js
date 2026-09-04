class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((pos, i) => [pos, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        const stack = [];
        for (const [pos, speed] of pairs) {
            const time = (target - pos) / speed;
            stack.push(time);
            if (
                stack.length > 1 &&
                stack[stack.length - 1] <= stack[stack.length - 2]
            ) stack.pop();
        }

        return stack.length;
    }
}
