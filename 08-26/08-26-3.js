'use strict'


// description
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

//  

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."


// my solution

/**
 * @param {string} s
 * @return {string}
 */
const myReplaceSpace = function (s) {
    return s.replace(/\s+/g, '%20')
};

// answer one


const replaceSpace1 = function (s) {
    return s.replace(/ /g, "%20")
};

// answer two

const replaceSpace2 = function (s) {
    return s.split(" ").join("%20");
};

// answer three



const s = "We are happy."

console.log(replaceSpace(s));
