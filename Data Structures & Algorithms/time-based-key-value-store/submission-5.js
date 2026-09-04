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
        const values = this.keyStore.get(key) || [];
        values.push([value, timestamp]);
        this.keyStore.set(key, values);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key) || [];
        let res = '';

        let l = 0;
        let r = values.length - 1;
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            const [value, time] = values[m];

            if (time <= timestamp) {
                res = value;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
