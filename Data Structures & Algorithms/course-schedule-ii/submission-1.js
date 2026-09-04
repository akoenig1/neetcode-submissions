class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const res = [];
        
        const prMap = new Map();
        for (let i = 0; i < numCourses; i++) {
            prMap.set(i, []);
        }
        for (const [course, pr] of prerequisites) {
            prMap.get(course).push(pr);
        }

        const visited = new Set();
        const visiting = new Set();
        const dfs = (course) => {
            if (visited.has(course)) return true;
            if (visiting.has(course)) return false;
            
            const prereqs = prMap.get(course);
            if (prereqs.length === 0) {
                res.push(course);
                visited.add(course);
                return true;
            }

            visiting.add(course);
            for (const pr of prereqs) {
                if (!dfs(pr)) return false;
            }
            visiting.delete(course);
            
            visited.add(course);
            res.push(course);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return res;
    }
}
