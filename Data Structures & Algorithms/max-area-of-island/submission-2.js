class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const visited = new Set();
        const dfs = (r, c) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                grid[r][c] === 0 ||
                visited.has(`${r},${c}`)
            ) return 0;

            visited.add(`${r},${c}`);

            return 1 +
                dfs(r + 1, c) +
                dfs(r - 1, c) +
                dfs(r, c + 1) +
                dfs(r, c - 1);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const size = dfs(r, c);
                max = Math.max(max, size);
            }
        }

        return max;
    }
}
