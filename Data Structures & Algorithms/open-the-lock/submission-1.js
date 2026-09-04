class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let state = '0000';
        const visited = new Set(deadends);

        const q = new Queue();
        q.enqueue([state, 0]);

        while(!q.isEmpty()) {
            const [state, turns] = q.dequeue();

            if (state === target) return turns;
            if (visited.has(state)) continue;

            visited.add(state);

            const currState = state.split('');
            for (let i = 0; i < state.length; i++) {
                const digit = parseInt(currState[i]);
                const digitUp = (digit + 1) % 10;
                const digitDown = (digit - 1 + 10) % 10;
                
                let stateUp = [...currState];
                let stateDown = [...currState];
                stateUp[i] = digitUp.toString();
                stateDown[i] = digitDown.toString();
                stateUp = stateUp.join('');
                stateDown = stateDown.join('');
            
                q.enqueue([stateUp, turns + 1]);
                q.enqueue([stateDown, turns + 1]);
            }
        }

        return -1;
    }
}
