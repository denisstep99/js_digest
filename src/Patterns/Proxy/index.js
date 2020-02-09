// Прокси, когда субьект встраивается в прокси
function createProxy(subject) {
  const proto = Object.getPrototypeOf(subject);

  function Proxy(subject) {
    this.subject = subject;
  }


  Proxy.prototype = Object.create(proto);

  // подменяемый метод
  Proxy.prototype.hello = function () {
    return this.subject.hello() + ' world!';
  };

  // делегтруемый метод
  Proxy.prototype.goodbye = function (...args) {
    return this.subject.goodbye
      .apply(this.subject, args);
  };

  return new Proxy(subject);
}


class Subject {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return 'Hello, my name is ' + this.name;
  }

  goodbye(name) {
    return 'Goodbye ' + name;
  }
}


module.exports = {
  Subject,
  createProxy
};
