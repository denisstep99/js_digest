function compress(str) {
    if (str === "") return "";

    let compressedStr = "";
    let currSequenceLength = 1;

    for (let pos = 1; pos < str.length; pos++) {
        if (str[pos] === str[pos - 1]) {
            currSequenceLength++;
        } else {
            compressedStr = compressedStr + str[pos - 1] + currSequenceLength;
            currSequenceLength = 1;
        }
    }

    compressedStr = compressedStr + str[str.length - 1] + currSequenceLength;

    return compressedStr;
}

module.exports = compress;