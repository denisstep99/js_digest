/**
 * Normal variant.
 */

function simplePromisify(func) {
  return function () {
    return new Promise((res) => {
      func(res);
    });
  }
}

const foo = (callback) => {
  setTimeout(
    () => {
      callback('foo')
    },
    Math.random() * 10
  );
};

const boo = (callback) => {
  setTimeout(
    () => {
      callback('boo')
    },
    Math.random() * 10
  );
};

const baz = (callback) => {
  setTimeout(
    () => {
      callback('baz')
    },
    Math.random() * 10
  );
};

const promisedFoo = simplePromisify(foo);
const promisedBoo = simplePromisify(boo);
const promisedBaz = simplePromisify(baz);

// example of running
// Promise.all([promisedFoo(), promisedBoo(), promisedBaz()]).then(
//   (values) => values.forEach((param) => console.log(param))
// );


/**
 * Super stupid variant.
 */
const stupidCallback = (callback, value) => {console.log(value); callback()};

// example of running
// foo(
//   stupidCallback.bind(
//     null, boo.bind(
//       null, stupidCallback.bind(
//         null, baz.bind(null, stupidCallback.bind(null, () => {})
//         )
//       )
//     )
//   )
// );


module.exports = {
  promisedFoo,
  promisedBoo,
  promisedBaz
};
