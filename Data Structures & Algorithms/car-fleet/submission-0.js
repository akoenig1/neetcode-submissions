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

        for (let car of cars) {
            const carTime = (target - car[0]) / car[1];
            if (stack.length > 0) {
                const frontTime = stack[stack.length - 1];
                if (carTime > frontTime) stack.push(carTime);
            } else {
                stack.push(carTime);
            }
        }

        return stack.length;
    }
}
