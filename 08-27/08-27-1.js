'use strict'


// description

// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7


// my solution

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const myBuildTree = (preorder, inorder) => {
    let result = null

    if (preorder.length > 1) {
        // 获取根节点
        const root = preorder[0]

        // 截取左中右中
        const inorderRootIndex = inorder.indexOf(root)
        const inLeft = inorder.slice(0, inorderRootIndex)
        const inRight = inorder.slice(inorderRootIndex + 1)

        // 去除根节点
        preorder.shift()

        // 截取左前右前
        const preLeft = preorder.slice(0, inLeft.length)
        const preRight = preorder.slice(inLeft.length, preorder.length)

        result = new TreeNode(root)
        result.left = myBuildTree(preLeft, inLeft)
        result.right = myBuildTree(preRight, inRight)

    } else if (preorder.length === 1) {
        result = new TreeNode(preorder[0])
        result.left = null
        result.right = null
    }

    return result
};

// answer one

const buildTree = (preorder, inorder) => {
    if (!preorder.length) return null
    const top = preorder.shift()
    const root = new TreeNode(top)
    const topIndex = inorder.indexOf(top)
    root.left = buildTree(preorder.slice(0, topIndex), inorder.slice(0, topIndex))
    root.right = buildTree(preorder.slice(topIndex), inorder.slice(topIndex + 1))
    return root
}



// answer two



// answer three



console.log(myBuildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

