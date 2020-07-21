function isPrimitive(obj) {
    return obj !== Object(obj);
}

function fillToSize(arr, length) {
    return Array.from({length}, (_, i) => {
        const currElement = arr[i % arr.length];

        return isPrimitive(currElement) ? currElement : {...currElement};
    });
}

module.exports = fillToSize;