class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const courseMap = {};
        for (let i = 0; i < numCourses; i++) {
            courseMap[i] = [];
        }
        for (const [course, prereq] of prerequisites) {
            courseMap[course].push(prereq);
        }

        const visiting = new Set();
        const dfs = (course) => {
            if (visiting.has(course)) return false;
            if (courseMap[course].length === 0) return true;
            visiting.add(course);

            const prereqs = courseMap[course];
            for (const pre of prereqs) {
                if (!dfs(pre)) return false;;
            }

            visiting.delete(course);
            courseMap[course] = [];
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
