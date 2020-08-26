

// my solution

/**
 * @param {string} s
 * @return {string}
 */
const myReplaceSpace = function (s) {
    return s.replace(/\s+/g, '%20')
};

const replaceSpace1 = function (s) {
    return s.replace(/ /g, "%20")
};

const replaceSpace2 = function (s) {
    return s.split(" ").join("%20");
};

const s = "We are happy."

console.log(replaceSpace(s));
