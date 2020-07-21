function add(value = 0) {
    function help(nextValue = 0) {
        value += nextValue;
        return help;
    }

    help.valueOf = () => value;

    return help;
}

module.exports = add;