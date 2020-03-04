module.exports = class ATM {
  /**
   *
   * @param state - {faceValue: count}
   */
  constructor(state) {
    this.state = state;
  }

  getMoney(sum) {
    const values = this._getPatternArray();
    const states = Object.create(null);
    states[0] = {...this.state};

    for (let i = 10; i <= sum; i += 10) {
      Object.keys(this.state).forEach(value => {
        if (values[i] > values[i - value] + 1 && states[i - value][value]) {
          states[i] = {...states[i - value]};

          states[i][value]--;
          values[i] = values[i - value] + 1;
        }
      });
    }

    if (values[sum] !== Infinity) {
      this.state = states[sum];
    }

    return this._getDiff(this.state, states[0]);
  }

  _getPatternArray() {
    const values = new Proxy([], {
      get(target, index) {
        return target[index] === undefined ? Infinity : target[index];
      }
    });
    values[0] = 0;

    return values;
  }

  _getDiff(newState, oldState) {
    const diff = Object.create(null);
    let sum = 0;

    Object.keys(oldState)
      .forEach((faceCurrency) => {
        diff[faceCurrency] = oldState[faceCurrency] - newState[faceCurrency]
        sum += oldState[faceCurrency] - newState[faceCurrency];
      });

    return !!sum && diff;
  }
};
