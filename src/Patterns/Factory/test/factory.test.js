const expect = require('expect');
const factories = require('../index');

describe('Factory pattern', () => {
  it('Image factory', () => {
    const png = factories.createImage('name.png');
    const gif = factories.createImage('name.gif', 16);
    const jpeg = factories.createImage('name.jpeg', 10);

    expect(png.isTransporent).toBeTruthy();
    expect(jpeg.quality).toBe(10);
    expect(gif.numberOfColours).toBe(16);
  });

  it('Profiler factory', () => {
    const development = factories.getProfiler('development', 'development');
    const production = factories.getProfiler('production', 'production');

    expect(development.label).toBe('development');
    expect(production.label).toBeUndefined();
  });
});
