class Iterator {
  /**
   *
   * @param taskQueue - Массив функций, которые принимают callback единтсвенным параметром
   * @param callback - Функция, которая будет вызвана после выполнения всех функций из taskQueue, или если хотя бы одна
   *  завершится неудачно.
   */
  constructor(taskQueue, callback = () => {}) {
    this._queue = taskQueue;
    this._index = 0;
    this._callback = callback;
  }

  _iterate() {
    if (this._index === this._queue.length) {
      return this._callback();
    }
    this._queue[this._index++]((err) => {
      if (err instanceof Error) {
        return this._callback(err);
      }

      process.nextTick(this._iterate.bind(this));
    });
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

