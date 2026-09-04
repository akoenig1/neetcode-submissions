class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
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
                grid[r][c] === '0' ||
                visited[r][c]
            ) return false;

            visited[r][c] = true;

            dfs(r+1, c);
            dfs(r-1, c);
            dfs(r, c+1);
            dfs(r, c-1);

            return true;
        }

        let count = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c)) count++;
            }
        }

        return count;
    }
}
