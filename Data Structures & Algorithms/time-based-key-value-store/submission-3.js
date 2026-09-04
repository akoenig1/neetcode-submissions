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

        let prevValue = "";
        for (let i = 0; i < values.length; i++) {
            const [value, time] = values[i];
            if (timestamp >= time) prevValue = value;
        }

        return prevValue;
    }
}
