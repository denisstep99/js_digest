class Request {
  constructor(url, method, body) {
    this.url = url;
    this.method = method;
    this.body = body;
  }
}

class RequestBuilder {
  #request;

  static get DEFAULT_BODY() {
    return {data: 'Some default data'};
  };

  static get DEFAULT_URL() {
    return 'default/url.ru';
  };

  static get DEFAULT_TYPE() {
    return 'get';
  };

  constructor() {
    this.#request = new Request(
      RequestBuilder.DEFAULT_URL,
      RequestBuilder.DEFAULT_TYPE,
      RequestBuilder.DEFAULT_BODY
    );
  }

  forUrl(url) {
    if (typeof url !== 'string') {
      throw new Error('URL must be type of string');
    }
    this.#request.url = url;
    return this;
  }

  useMethod(method) {
    if (typeof method !== 'string') {
      throw new Error('Method must be type of string');
    }

    this.#request.method = method;
    return this;
  }

  useBody(body) {
    if (typeof body !== 'object' && typeof body !== 'string') {
      throw new Error('Method must be type of string or an object');
    }

    this.#request.body = body;
    return this;
  }

  build() {
    return this.#request;
  }
}


module.exports = RequestBuilder;
