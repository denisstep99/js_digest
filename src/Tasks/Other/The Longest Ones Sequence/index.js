function getLenOfSequence (sequence) {
    let lastSequence = 0,
        currentSequence = 0,
        maxSequence = 0;

    sequence.forEach((element, index) => {
        if (element === 1) {
            currentSequence += 1;
        } else if (sequence[index - 1] !== undefined && sequence[index - 1] === 1) {
            if (currentSequence + lastSequence > maxSequence) {
                maxSequence = currentSequence + lastSequence;
            }
            lastSequence = currentSequence;
            currentSequence = 0;
        } else if (sequence[index - 1] !== undefined && sequence[index - 1] === 0){
            lastSequence = 0;
        }
    });

    if (currentSequence + lastSequence > maxSequence) {
        maxSequence = currentSequence + lastSequence;
    }

    return maxSequence;
}

module.exports = getLenOfSequence;