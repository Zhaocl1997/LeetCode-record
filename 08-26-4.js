

// my solution
// no
// 链表 js原生没有的概念

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


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

const reverseLink = (head) => {
    if (head === null || head.next === null) return head
    const p = reverseLink(head.next)
    head.next.next = head // 指针反转
    head.next = null
    return p // 返回真正的表头
}


console.log(reversePrint([1, 3, 2]));

