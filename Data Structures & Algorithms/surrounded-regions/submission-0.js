class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
        const dfs = (i, j) => {
            visited[i][j] = true;
            for (const [di, dj] of dirs) {
                const ni = i + di;
                const nj = j + dj;
                if (ni >= 0 && nj >= 0 && ni < ROWS && nj < COLS && !visited[ni][nj] && board[ni][nj] === 'O') {
                    dfs(ni, nj);
                }
            }
        }

        for (let i = 0; i < ROWS; i++) {
            if (board[i][0] === 'O') dfs(i, 0);
            if (board[i][COLS-1] === 'O') dfs(i, COLS-1);
        }

        for (let j = 0; j < COLS; j++) {
            if (board[0][j] === 'O') dfs(0, j);
            if (board[ROWS-1][j] === 'O') dfs(ROWS-1, j);
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (board[i][j] === 'O' && !visited[i][j]) board[i][j] = 'X';
            }
        }

        return board;
    }
}
