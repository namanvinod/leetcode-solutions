// Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (input) {
    if (!input) return 0;
    if (!input.trim()) return 1;

    let chars = {};
    let result = 0, inpLen = input.length;

    for (let i = 0; i < inpLen; i++) {
        let char = input[i];
        if (chars[char] === 0 || chars[char]) {
            if (result === 0 || ((Object.keys(chars).length) >= result)) {
                result = Object.keys(chars).length;
            }
            i = chars[char];
            chars = {};
        }
        else {
            chars[char] = i;
        }
    }

    if (result === 0 || ((Object.keys(chars).length) >= result)) {
        result = Object.keys(chars).length;
    }

    return result;
};

getOutput = () => {
    console.log(1, lengthOfLongestSubstring(undefined) === 0);
    console.log(2, lengthOfLongestSubstring('') === 0);
    console.log(3, lengthOfLongestSubstring('   ') === 1);
    console.log(4, lengthOfLongestSubstring('   g  ') === 2);
    console.log(5, lengthOfLongestSubstring('abcabcef') === 5);
    console.log(6, lengthOfLongestSubstring('eabaabec') === 4);
    console.log(7, lengthOfLongestSubstring('dvdf') === 3);
    console.log(8, lengthOfLongestSubstring('c') === 1);
    console.log(9, lengthOfLongestSubstring("jbpnbwwd") === 4);
    console.log(10, lengthOfLongestSubstring("hkcpmprxxxqw") === 5);
}

getOutput();
