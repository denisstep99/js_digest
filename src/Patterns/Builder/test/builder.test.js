const expect = require('expect');
const UrlBuilder = require('../index');

describe('Builder pattern', () => {
  it('Common tests', () => {
    expect((new UrlBuilder()).build()).toEqual({
      url: UrlBuilder.DEFAULT_URL,
      body: UrlBuilder.DEFAULT_BODY,
      method: UrlBuilder.DEFAULT_TYPE
    });

    expect(
      (new UrlBuilder())
        .forUrl('custom/url.ru')
        .build()
    ).toEqual({
      url: 'custom/url.ru',
      body: UrlBuilder.DEFAULT_BODY,
      method: UrlBuilder.DEFAULT_TYPE
    });

    expect(
      (new UrlBuilder())
        .forUrl('custom/url.ru')
        .useBody({name: 'Denis'})
        .build()
    ).toEqual({
      url: 'custom/url.ru',
      body: {name: 'Denis'},
      method: UrlBuilder.DEFAULT_TYPE
    });

    expect(
      (new UrlBuilder())
        .forUrl('custom/url.ru')
        .useBody({name: 'Denis'})
        .useMethod('post')
        .build()
    ).toEqual({
      url: 'custom/url.ru',
      body: {name: 'Denis'},
      method: 'post'
    });
  });


  it('Should throw exceptions', () => {
    expect(
      () => {
        (new UrlBuilder())
          .useBody(100)
          .build()
      }).toThrow();

    expect(
      () => {
        (new UrlBuilder())
          .forUrl()
          .build()
      }).toThrow();
  });
});
