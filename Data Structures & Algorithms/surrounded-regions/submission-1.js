class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
        const dfs = (i, j) => {
            if (i < 0 || j < 0 || i >= ROWS || j >= COLS || board[i][j] !== 'O') return;
            board[i][j] = 'T';
            for (const [di, dj] of dirs) {
                const ni = i + di;
                const nj = j + dj;
                dfs(ni, nj);
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
                if (board[i][j] === 'O') board[i][j] = 'X';
                else if (board[i][j] === 'T') board[i][j] = 'O';
            }
        }
    }
}
