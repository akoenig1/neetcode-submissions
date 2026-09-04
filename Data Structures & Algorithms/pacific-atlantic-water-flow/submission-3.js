class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        const pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        for (let r = 0; r < ROWS; r++) dfs(r, 0, pac);
        for (let c = 0; c < COLS; c++) dfs(0, c, pac);

        const atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        for (let r = 0; r < ROWS; r++) dfs(r, COLS-1, atl);
        for (let c = 0; c < COLS; c++) dfs(ROWS-1, c, atl);

        function dfs(r, c, ocean) {
            ocean[r][c] = true;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr < 0 ||
                    nr >= ROWS ||
                    nc < 0 ||
                    nc >= COLS ||
                    ocean[nr][nc] ||
                    heights[nr][nc] < heights[r][c]
                ) continue;

                dfs(nr, nc, ocean);
            }
        }

        const res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (atl[r][c] && pac[r][c]) res.push([r, c]);
            }
        }
        return res;
    }
}
