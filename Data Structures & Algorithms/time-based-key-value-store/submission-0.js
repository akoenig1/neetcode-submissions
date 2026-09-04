class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore[key]) this.keyStore[key] = [];
        this.keyStore[key].push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore[key] || [];
        let l = 0;
        let r = values.length - 1;
        let res = '';
        
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const ts = values[mid][1];
            if (ts <= timestamp) {
                res = values[mid][0];
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return res;
    }
}
