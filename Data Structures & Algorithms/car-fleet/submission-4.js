class Car {
    constructor(position, speed) {
        this.position = position;
        this.speed = speed;
    }
}

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            const car = new Car(position[i], speed[i]);
            cars.push(car);
        }
        cars.sort((a, b) => a.position - b.position);

        const stack = [];
        for (let i = cars.length - 1; i >= 0; i--) {
            const car = cars[i];
            const time = (target - car.position) / car.speed;
            
            if (
                stack.length === 0 ||
                time > stack[stack.length - 1]
            ) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
