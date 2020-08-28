'use strict'


// description

// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。


// my solution

/**
 * @param {number} n
 * @return {number}
 */
const fibonacci = n => {
    if (n <= 1) return n

    const arr = []
    function* fib(x) {
        let a = 1
        let b = 1
        let n = 0
        while (n <= x) {
            yield a; // 这个分号一定要有
            [a, b] = [b, (a + b) % (1e9 + 7)]
            n++
        }
    }

    const gen = fib(n - 1)

    function next() {
        const res = gen.next()
        if (res.done) {
            return
        } else {
            arr.shift()
            arr.push(res.value)
            next()
        }
    }

    next()

    return arr[0]
}

// answer one

/**
 * @param {number} n
 * @return {number}
 */
const fib1 = function (n) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % (1e9 + 7);
    }
    return fibonacci[n];
};


// answer two

//3.不错的递归+动态规划解法
//优点：空间换时间，所有计算结果都被缓存，下一次计算直接读取缓存结果，性能比较好
//缺点：需要额外的储存空间，空间复杂度高
//注：动态规划的思想是，通过保存中间计算结果，减少结果计算时间

const fib2 = function (n) {
    let dp = [0, 1]
    function f(n) {
        if (dp[n] != undefined) {
            return dp[n];
        }
        dp[n] = f(n - 1) + f(n - 2);
        return dp[n] % 1000000007;
    }
    return f(n);
};

// answer three

//4.很好的循环计算解法
//优点：每一次计算结果都能得到利用，易于理解，只保存前两个计算结果，性能最优
//缺点：没有明显的缺点，在本题中记得看清题目中取模的要求
//注：其他题解有提到，但这题不需要用到新的BigInt类型，取模就是为了防止结果溢出，
//而且中间计算结果也达不到 Number.MAX_SAFE_INTEGER (9007199254740991) 的量级
//变量c不是必要的，可以直接用代数方法或ES6解构赋值做进一步优化，这种循环解法也可以看做是一种动态规划解法

const fib3 = function (n) {
    if (n <= 1) return n;
    let a = 1, b = 1, c = 0;
    while (n-- > 0) {

        a = b;
        b = c;
        c = (a + b) % 1000000007;

    }
    return c;
};


// answer four

const cache = {
    0: 0,
    1: 1
}

const fib4 = function (n) {
    if (cache[n] === undefined) {
        // 还没算过
        cache[n] = (fib4(n - 1) + fib4(n - 2)) % (1e9 + 7);
    }
    return cache[n];
};

console.log(fibonacci(81));
console.log(fib1(82));
console.log(fib2(81));
console.log(fib3(81));
console.log(fib4(81));
