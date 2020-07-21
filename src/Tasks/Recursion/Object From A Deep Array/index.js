function getObject(arr, path = []) {
    let resultObj = {};

    arr.forEach(element => {
        const currentPath = element[0] !== "" ? path.concat(element[0]) : path;

        if (Array.isArray(element[1])) {
            Object.assign(resultObj, getObject(element[1], currentPath));
        } else {
            if (currentPath.length) {
                resultObj[currentPath.join('.')] = element[1];
            } else {
                throw new Error("Empty path");
            }
        }
    });

    return resultObj;
}

module.exports = getObject;