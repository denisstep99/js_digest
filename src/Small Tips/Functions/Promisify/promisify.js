function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      args.push(function resolvePromise(err, ...args) {
        if (err) {
          reject(err);
        } else if (args.length < 2) {
          resolve(args[0]);
        } else {
          resolve(args);
        }
      });

      func.apply(null, args);
    });
  }
}

module.exports = promisify;
