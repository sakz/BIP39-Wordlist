const bip39 = require('bip39');
const fs = require('fs');

// 获取完整的英文单词列表
const wordList = bip39.wordlists.english;

// 创建单词到索引的映射对象
const wordIndexMap = {};
wordList.forEach((word, index) => {
    wordIndexMap[word] = index;
});

// 将映射对象转换为JavaScript代码字符串
const jsCode = `const wordList = ${JSON.stringify(wordIndexMap, null, 2)};
`;

// 写入到文件
fs.writeFileSync('wordlist.js', jsCode);
console.log('Word list has been generated successfully!');