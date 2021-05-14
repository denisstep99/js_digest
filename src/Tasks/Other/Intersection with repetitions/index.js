// only for numbers
// for another types use Map
function getIntersection(arr1, arr2) {
    const result = [];

    const elementsOfFirst = arr1.reduce((elements, currElement) => {
        elements[currElement] = ~~elements[currElement] + 1;
        return elements;
    }, {});

    const elementsOfSecond = arr2.reduce((elements, currElement) => {
        elements[currElement] = ~~elements[currElement] + 1;
        return elements;
    }, {});

    Object.keys(elementsOfFirst).forEach((value) => {
        const minNumber = Math.min(elementsOfFirst[value], elementsOfSecond[value]);

        if (minNumber) {
            result.push(...Array(minNumber).fill(Number(value)));
        }
    });

    return result;
}

module.exports = getIntersection;

