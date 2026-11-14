class Solution {

    private closeToOpen = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        for (let c of s) {
            if (this.closeToOpen[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === this.closeToOpen[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c)
            }
        }

        return stack.length === 0;
    }
}
