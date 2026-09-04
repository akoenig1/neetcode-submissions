class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];

        const pacific = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atlantic = Array.from({ length: ROWS }, () => Array(COLS).fill(false));;

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    !ocean[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) dfs(nr, nc, ocean);
            }
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific);
            dfs(ROWS-1, c, atlantic);
        }
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific);
            dfs(r, COLS-1, atlantic);
        }

        const res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (atlantic[r][c] && pacific[r][c]) res.push([r, c]);
            }
        }
        return res;
    }
}
