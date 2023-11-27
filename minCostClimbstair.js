function minCostClimbingStairs(cost) {
    const n = cost.length;
    let first = cost[0];
    let second = cost[1];

    for (let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(first, second);
        first = second;
        second = current;
    }

    return Math.min(first, second);
}

const cost1 = [1,2,3,4];
console.log(minCostClimbingStairs(cost1))

const cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost2))