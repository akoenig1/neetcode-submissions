class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        word = word.split('');
        const visited = new Set();
        
        const dfs = (r, c, i) => {
            if (
                r < 0
                || r >= ROWS
                || c < 0
                || c >= COLS
                || visited.has(`${r},${c}`)
                || board[r][c] !== word[i]
            ) return false;

            visited.add(`${r},${c}`);
            if (i === word.length - 1) return true;

            const found = dfs(r, c+1, i+1)
                        || dfs(r, c-1, i+1)
                        || dfs(r+1, c, i+1)
                        || dfs(r-1, c, i+1);

            visited.delete(`${r},${c}`);
            return found;
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }

        return false;
    }
}
