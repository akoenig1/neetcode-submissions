class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const visiting = new Set();
        const dfs = (r, c, i) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                visiting.has(`${r},${c}`) ||
                board[r][c] !== word[i]
            ) return false;

            if (i === word.length - 1) return true;

            visiting.add(`${r},${c}`);
            const found = (
                dfs(r+1, c, i+1) ||
                dfs(r-1, c, i+1) ||
                dfs(r, c+1, i+1) ||
                dfs(r, c-1, i+1)
            );
            visiting.delete(`${r},${c}`);

            return found;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }

        return false;
    }
}
