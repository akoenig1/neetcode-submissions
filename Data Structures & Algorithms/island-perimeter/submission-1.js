class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();

        const dfs = (r, c) => {
            if (visited.has(`${r},${c}`)) return 0;
            
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                grid[r][c] === 0
            ) return 1;

            visited.add(`${r},${c}`);

            return (
                dfs(r+1, c) +
                dfs(r-1, c) +
                dfs(r, c+1) +
                dfs(r, c-1)
            );
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c]) return dfs(r, c);
            }
        }
    }
}
