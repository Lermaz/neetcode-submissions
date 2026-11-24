class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res: number[] = new Array(temperatures.length).fill(0);
        const stack: number[][] = []; // pair: [temp, index]

        for (let i = 0; i < temperatures.length; i++) {
            const t: number = temperatures[i]!;
            while (stack.length > 0) {
                const top = stack[stack.length - 1]!;
                if (t <= top[0]!) break;

                const popped = stack.pop()!;
                const stackInd = popped[1]!;
                res[stackInd] = i - stackInd;
            }
            stack.push([t, i]);
        }
        return res;
    }
}
