class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        const visited = new Set();
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (r, c) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                grid[r][c] === '0' ||
                visited.has(`${r},${c}`)
            ) return false;
            
            visited.add(`${r},${c}`);

            dfs(r, c+1);
            dfs(r, c-1);
            dfs(r+1, c);
            dfs(r-1, c);
            
            return true;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c)) res++;
            }
        }

        return res;
    }
}
