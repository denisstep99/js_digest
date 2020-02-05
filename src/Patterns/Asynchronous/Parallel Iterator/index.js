class Iterator {
  /**
   *
   * @param taskQueue - Массив функций, которые принимают callback единтсвенным параметром
   * @param width - Число параллельно выполняющихся заданий
   * @param callback - Функция, которая будет вызвана после выполнения всех функций из taskQueue, или если хотя бы одна
   *  завершится неудачно.
   */
  constructor(taskQueue, width = 4, callback = () => {}) {
    if (width < 1) {
      width = 1;
    }

    if (typeof width !== 'number') {
      callback = width;
      width = 4;
    }

    this._running = 0;
    this._completed = 0;
    this._width = width;
    this._queue = taskQueue;
    this._index = 0;
    this._callback = callback;
  }

  _iterate() {
    while (this._index < this._queue.length && this._running < this._width) {
      this._running++;
      this._queue[this._index++]((err) => {
        // stop iterating if an error
        if (err instanceof Error) {
          return this._callback(err);
        }

        if (++this._completed === this._queue.length) {
          return this._callback();
        }

        this._running--;
        process.nextTick(this._iterate.bind(this));
      });
    }
  }

  /**
   *
   * Стартует выполнение итератора асинхранно.
   * Начинают выполняться все задания в очереди taskQueue. (По порядку)
   */
  start() {
    process.nextTick(this._iterate.bind(this));
  };
}

module.exports = Iterator;
