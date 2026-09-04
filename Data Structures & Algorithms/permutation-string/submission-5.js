class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freqs1 = new Array(26).fill(0);
        let freqs2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            freqs1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            freqs2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (freqs1[i] === freqs2[i]) matches++;
        }

        // move fixed length window across s2, add and delete from s2 freq array as you go
        // iterate matches at each add and delete
        // return true if matches === 26
        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true;

            let i = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            freqs2[i]++;
            if (freqs1[i] === freqs2[i]) {
                matches++;
            } else if (freqs1[i] + 1 === freqs2[i]) {
                matches--;
            }

            i = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            freqs2[i]--;
            if (freqs1[i] === freqs2[i]) {
                matches++;
            } else if (freqs1[i] - 1 === freqs2[i]) {
                matches--;
            }
            l++;
        }

        return matches === 26;
    }
}
