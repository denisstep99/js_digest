function replace(str, source) {
    return str.replace(/{\s*(\w+)\s*}/g, (value, groupValue) => source[groupValue] || value);
}

module.exports = replace;