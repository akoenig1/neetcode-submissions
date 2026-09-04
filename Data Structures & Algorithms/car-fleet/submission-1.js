class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const cars = [];

        for (let i = 0; i < position.length; i++) {
            cars[i] = [position[i], speed[i]];
        }

        cars.sort((a, b) => b[0] - a[0]);

        for (let [p, s] of cars) {
            const carTime = (target - p) / s;
            stack.push(carTime);
            if (stack.length > 1) {
                const frontTime = stack[stack.length - 2];
                if (carTime <= frontTime) stack.pop();
            } else {
                
            }
        }

        return stack.length;
    }
}
