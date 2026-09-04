class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = new Queue();
        let freshFruit = 0;
        let minutes = 0;

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) freshFruit++;
                if (grid[i][j] === 2) q.push([i, j, minutes]);
            }
        }

        const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

        while (q.size() > 0) {
            const [i, j, minute] = q.pop();
            minutes = Math.max(minute, minutes);
            for (const [di, dj] of dirs) {
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && nj >= 0 && ni < ROWS && nj < COLS && grid[ni][nj] === 1) {
                    grid[ni][nj] = 2;
                    freshFruit--;
                    q.push([ni, nj, minute+1]);
                }
            }
        }

        return freshFruit === 0 ? minutes : -1;
    }
}
