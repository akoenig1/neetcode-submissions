class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = new Queue();

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 0) q.push([i, j, 0]);
            }
        }

        const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

        while (q.size() > 0) {
            const [i, j, level] = q.pop();

            for (const dir of dirs) {
                const [di, dj] = dir;
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && nj >= 0 && ni < ROWS && nj < COLS && grid[ni][nj] === 2147483647) {
                    grid[ni][nj] = level + 1;
                    q.push([ni, nj, level + 1]);
                }
            }
        }

        return grid;
    }
}
