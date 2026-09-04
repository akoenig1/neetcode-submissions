class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const visited = Array.from(
            { length: ROWS }, 
            () => Array(COLS).fill(false)
        );

        const dfs = (r, c) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                grid[r][c] === 0
            ) return 1;    
            if (visited[r][c]) return 0;

            visited[r][c] = true;

            return dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) return dfs(r, c);
            }
        }

        return 0;
    }
}
