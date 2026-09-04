class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const prMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            prMap.set(i, []);
        }
        for (const [course, pr] of prerequisites) {
            prMap.get(course).push(pr);
        }
        
        const visiting = new Set();
        const dfs = (course) => {
            if (visiting.has(course)) return false;

            const prs = prMap.get(course);
            if (prs.length === 0) return true;

            visiting.add(course);
            for (const pr of prs) {
                if (!dfs(pr)) return false;
            }
            visiting.delete(course);
            prMap.set(course, []);

            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
