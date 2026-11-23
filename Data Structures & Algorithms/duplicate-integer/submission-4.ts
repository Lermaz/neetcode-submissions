class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const list = new Set(nums);
        return nums.length !== list.size ? true : false;
    }
}
