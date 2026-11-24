class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        return cleanString === cleanString.split("").reverse().join("");
    }
}
