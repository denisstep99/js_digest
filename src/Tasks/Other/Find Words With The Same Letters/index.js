function findWords(words) {
    const sortedWords = Object.create(null);

    words.forEach(word => {
        const key = Array.from(word).sort().join();

        if (sortedWords[key]) {
            sortedWords[key].push(word);
        } else {
            sortedWords[key] = [word];
        }
    });

    return Object.values(sortedWords);
}

module.exports = findWords;