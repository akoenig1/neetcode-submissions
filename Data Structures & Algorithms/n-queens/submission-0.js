class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res = [];

        const layouts = [];
        const backtrack = (r, cols, diagL, diagR) => {
            if (r === n) {
                res.push([...layouts]);
                return;
            }

            for (let c = 0; c < n; c++) {
                if (cols.has(c) || diagL.has(r - c) || diagR.has(r + c)) continue;
                
                cols.add(c);
                diagL.add(r - c);
                diagR.add(r + c);

                let rowLayout = '';
                for (let i = 0; i < n; i++) {
                    if (i === c) {
                        rowLayout += 'Q';
                    } else {
                        rowLayout += '.';
                    }
                }

                layouts.push(rowLayout);

                backtrack(r + 1, cols, diagL, diagR);

                cols.delete(c);
                diagL.delete(r - c);
                diagR.delete(r + c);
                layouts.pop();
            }
        }

        backtrack(0, new Set(), new Set(), new Set());

        return res;
    }
}
