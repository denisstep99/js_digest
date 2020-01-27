const checkValid = require('../index');
const expect = require('expect');

describe('Valid Brackets', () => {
  describe('Version 1', () => {
    it('With one argument', () => {
      expect(checkValid.v1('')).toBe(true);
      expect(checkValid.v1('(()())')).toBe(true);
      expect(checkValid.v1('()()()()(())((()))')).toBe(true);
      expect(checkValid.v1('{}{}{}{{{}{}}}')).toBe(true);
      expect(checkValid.v1('[][[][[]]]')).toBe(true);
      expect(checkValid.v1(')()')).toBe(false);
      expect(checkValid.v1(')()(')).toBe(false);
      expect(checkValid.v1('(()()(()')).toBe(false);
      expect(checkValid.v1('(hello)((world)())')).toBe(true);
      expect(checkValid.v1('just a simple text')).toBe(true);
    });

    it('With two arguments', () => {
      expect(checkValid.v1('', ['L', 'R'])).toBe(true);
      expect(checkValid.v1('LLRR', ['L', 'R'])).toBe(true);
      expect(checkValid.v1('LLRLRLLRRR', ['L', 'R'])).toBe(true);
      expect(checkValid.v1('LL)({}R5L[]R2L3L()R4R342R', ['L', 'R'])).toBe(true);
    });
  });

  describe('Version 2', () => {
    it('With one argument', () => {
      expect(checkValid.v2('')).toBe(true);
      expect(checkValid.v2('(()())')).toBe(true);
      expect(checkValid.v2('()()()()(())((()))')).toBe(true);
      expect(checkValid.v2('{}{}{}{{{}{}}}')).toBe(true);
      expect(checkValid.v2('[][[][[]]]')).toBe(true);
      expect(checkValid.v2(')()')).toBe(false);
      expect(checkValid.v2(')()(')).toBe(false);
      expect(checkValid.v2('(()()(()')).toBe(false);
      expect(checkValid.v2('(hello)((world)())')).toBe(true);
      expect(checkValid.v2('just a simple text')).toBe(true);


      expect(checkValid.v2('[[]((){})]')).toBe(true);
      expect(checkValid.v2('[[]((){})')).toBe(false);
      expect(checkValid.v2('[[word]((another){} words between)]')).toBe(true);
      expect(checkValid.v2(']]][[[}}}{{{')).toBe(false);
    });


    it('With two arguments', () => {
      expect(checkValid.v2('', [['L', 'R'], ['M', 'N']])).toBe(true);
      expect(checkValid.v2('LLRRMNMMNN', [['L', 'R'], ['M', 'N']])).toBe(true);
      expect(checkValid.v2('LLRLMMNNRLLRRR', [['L', 'R'], ['M', 'N']])).toBe(true);
      expect(checkValid.v2('LLRLMNNRLLRRR', [['L', 'R'], ['M', 'N']])).toBe(false);
      expect(checkValid.v2('LLRLMMNRNLLRRR', [['L', 'R'], ['M', 'N']])).toBe(false);
      expect(checkValid.v2('LL)({}R5L[]R2LMNMMNN3L()R4R342R', [['L', 'R'], ['M', 'N']])).toBe(true);
    });
  });
});
