const expect = require('expect');
const replace = require('../index');

describe('Replace Brackets Function', () => {
    it('Common tests', () => {
        expect(replace("My name is { name }", {name: "Denis"})).toBe("My name is Denis");
        expect(replace("My name is { name }", {age: "Denis"})).toBe("My name is { name }");

        expect(replace("My name is { name } { secondName }", {name: "Denis", secondName: "Stepanov"})).toBe("My name is Denis Stepanov");
        expect(replace("My name is { name } { secondName }", {name: "Denis", second: "Stepanov"})).toBe("My name is Denis { secondName }");

        expect(replace("My name is {name} { secondName }", {name: "Denis", secondName: "Stepanov"})).toBe("My name is Denis Stepanov");
        expect(replace("My name is {    name    } {  secondName}", {name: "Denis", secondName: "Stepanov"})).toBe("My name is Denis Stepanov");
    });
});