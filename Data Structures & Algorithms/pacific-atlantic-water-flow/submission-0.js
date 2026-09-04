class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const atlantic = new Set();
        const pacific = new Set();

        const dirs = [[0,1], [0,-1], [1,0], [-1,0]];
        const dfs = (i, j, ocean) => {
            const key = `${i},${j}`
            if (ocean.has(key)) return;
            ocean.add(key);

            for (const [xi, xj] of dirs) {
                const ni = i + xi;
                const nj = j + xj;
                if (ni >= 0 && nj >= 0 && ni < ROWS && nj < COLS && heights[i][j] <= heights[ni][nj]) {
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

        const both = new Set([...atlantic].filter(cell => pacific.has(cell)));
        return [...both].map(cell => cell.split(',').map(Number));
    }
}
