
// my solution

/**
 * @param {number[]} nums
 * @return {number}
 */
const myFindRepeatNumber = function (nums) {
    const n = nums.length
    const temp = []
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                temp.push(nums[i])
            }
        }
    }

    return temp[Math.floor(Math.random() * temp.length)]
};

// 解法 1: 使用哈希表
// 哈希表的结构是：number-boolean，number 就是数组中的数字，boolean 代表数字是否出现过。
// 整体的流程是：遍历数组中的数字，检查是否出现过，如果出现过，那么返回此数字。代码实现如下

/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber1 = function (nums) {
    const map = {};
    for (const num of nums) {
        if (!map[num]) {
            map[num] = true;
        } else {
            return num;
        }
    }
};

// 解法 2: 原地哈希（推荐）
// 从题目描述可以知道，所有数字都在 0 ～ n-1 的范围内。因此不需要额外开辟空间，每次遍历时，检查当前元素是否放在了正确位置上（例如元素 i 应该放在下标为 i 的位置上）。
// 如果放在了正确位置上，那么继续循环。
// 否则：
// 下标为 num 的元素 === num，说明当前元素 num 是重复的，直接返回
// 下标为 num 的元素 !== num，交换当前元素和下标为 num 的元素，将当前元素放入到正确位置上
// 这里要注意的是，第二种情况交换完元素后，应该继续检测下标为 i 的元素是否放在了位置 i 上，实现上使用while内循环即可。
// 以[1, 3, 2, 3]为例，第一次交换后，变为[3, 1, 2, 3]，如果没有内循环，那么就会跳过第一个 3，继续遍历，而后面的元素又恰巧都在正确位置上，最终没有检查出重复元素。


/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber2 = function (nums) {
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        // 检测下标为i的元素是否放在了位置i上
        while ((num = nums[i]) !== i) {
            if (num === nums[num]) {
                return num;
            }
            [nums[i], nums[num]] = [nums[num], nums[i]];
        }
    }
};


const arr = [1, 2, 2, 3, 3, 4, 5, 6, 7, 7]

console.log(findRepeatNumber2(arr));

