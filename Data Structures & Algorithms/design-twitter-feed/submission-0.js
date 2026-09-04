class Twitter {
    constructor() {
        this.count = 0;
        this.followMap = {};
        this.tweetMap = {};
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetMap[userId]) this.tweetMap[userId] = [];
        this.tweetMap[userId].push([this.count--, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const heap = new MaxPriorityQueue(x => x[0]);

        if (!this.followMap[userId]) this.followMap[userId] = new Set();
        const followees = this.followMap[userId];
        followees.add(userId);

        for (const u of followees) {
            if (this.tweetMap[u]) {
                const tweets = this.tweetMap[u];
                for (const t of tweets) {
                    heap.enqueue(t);
                }
            }
        }

        while (heap.size() > 10) {
            heap.dequeue();
        }

        return heap.toArray().map(t => t[1]).reverse();
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap[followerId]) {
            this.followMap[followerId] = new Set();
        }
        this.followMap[followerId].add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap[followerId]) {
            this.followMap[followerId].delete(followeeId);
        }
    }
}
