'use strict'


// description

// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

// 示例 1:

// 输入: [10,2]
// 输出: "102"
// 示例 2:

// 输入: [3,30,34,5,9]
// 输出: "3033459"


// my solution

/**
 * @param {number[]} nums
 * @return {string}
 */
const myMinNumber = function (nums) {
    const Comparator = (a, b) => {
        const s1 = a + "" + b
        const s2 = b + "" + a
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) < s2.charAt(i)) {
                return -1
            }
            if (s1.charAt(i) > s2.charAt(i)) {
                return 1
            }
        }
        return 1
    }

    nums.sort(Comparator)

    let result = ""
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }
    return result
};

// answer one

const minNumber1 = function (nums) {
    return nums.sort((a, b) => ('' + a + b) - ('' + b + a)).join('')
}


// answer two

const minNumber2 = function(nums) {
    nums.sort((a, b) => {
        const s1 = a + "" + b;
        const s2 = b + "" + a;

        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
    });
    return nums.join("");
};

// answer three



const arr = [3, 30, 34, 5, 9]
console.log(minNumber1(arr));
