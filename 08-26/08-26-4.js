
'use strict'


// description

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]

// my solution

// no

// answer one

/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function (head) {
    const res = []
    while (head) {
        res.unshift(head.val)
        head = head.next
    }
    return res
};

// answer two


const reverseLink = (head) => {
    if (head === null || head.next === null) return head
    const p = reverseLink(head.next)
    head.next.next = head // 指针反转
    head.next = null
    return p // 返回真正的表头
}


// answer three



console.log(reversePrint([1, 3, 2]));

