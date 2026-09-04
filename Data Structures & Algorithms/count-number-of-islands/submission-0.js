class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let res = 0;
        // const visited = new Set();
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (i, j) => {
            if (i < 0 || j < 0 || i >= ROWS || j >= COLS || grid[i][j] === '0') return;
            
            grid[i][j] = '0';
            dfs(i-1, j);
            dfs(i+1, j);
            dfs(i, j-1);
            dfs(i, j+1);
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === '1') {
                    dfs(i, j);
                    res++;
                }
            }
        }

        return res;
    }
}
