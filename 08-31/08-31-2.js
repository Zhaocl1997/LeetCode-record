'use strict'


// description

// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0


// my solution

const myMinArray = function (numbers) {
    return numbers.sort((a, b) => a - b)[0]
};

// answer one

const minArray1 = function (numbers) {
    return Math.min(...numbers)
};

// answer two
// 二分法
const minArray2 = function (numbers) {
    let left = 0,
        right = numbers.length - 1;
    while (left < right) {
        // 二分法
        const temp = Math.floor(left + (right - left) / 2);
        if (numbers[temp] > numbers[right]) {
            left = temp + 1;
        } else if (numbers[temp] < numbers[right]) {
            right = temp
        } else {
            right--
        }
    }
    return numbers[left]
};


// answer three
// 双指针
const minArray3 = function (numbers) {
    let res = numbers[0];
    // 循环一半
    for (let i = 0; i < numbers.length / 2; i++) {
        res = Math.min(res, numbers[i], numbers[numbers.length - 1 - i]) // 对比头尾取最小值
    }
    return res
};

