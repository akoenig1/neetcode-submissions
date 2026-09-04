class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const prMap = new Map();
        for (const [course, pr] of prerequisites) {
            if (!prMap.has(course)) prMap.set(course, []);
            prMap.get(course).push(pr);
        }
        
        const visiting = new Set();
        const dfs = (course) => {
            if (visiting.has(course)) return false;
            if (visited.has(course)) return true;

            const prs = prMap.get(course);
            if (!prs || prs.length === 0) return true;

            visiting.add(course);
            for (const pr of prs) {
                if (!dfs(pr)) return false;
            }
            visiting.delete(course);
            visited.add(course);
            return true;
        }

        const visited = new Set();
        for (let i = 0; i < numCourses; i++) {
            if (visited.has(i)) continue;
            if (!dfs(i)) return false;
        }

        return true;
    }
}
