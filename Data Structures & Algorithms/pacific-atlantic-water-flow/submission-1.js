class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const atlantic = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const pacific = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const dirs = [[0,1],[1,0],[0,-1],[-1,0]];

        const dfs = (i, j, ocean) => {
            ocean[i][j] = true;
            for (const [di, dj] of dirs) {
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && nj >= 0 && ni < ROWS && nj < COLS 
                    && !ocean[ni][nj] && heights[ni][nj] >= heights[i][j]) {
                        dfs(ni, nj, ocean);
                }
            }
        }

        for (let i = 0; i < ROWS; i++) {
            dfs(i, 0, pacific);
            dfs(i, COLS-1, atlantic);
        }

        for (let j = 0; j < COLS; j++) {
            dfs(0, j, pacific);
            dfs(ROWS-1, j, atlantic);
        }

        const res = [];
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (atlantic[i][j] && pacific[i][j]) res.push([i,j]);
            }
        }
        return res;
    }   
}
