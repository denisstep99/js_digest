class Queue {
    #queueMap = new Map();
    #headPosition = 0;
    #tailPosition = 0;

    constructor(array) {
        if (Array.isArray(array)) {

            array.forEach((currentValue) => {
               this.#queueMap.set(this.#tailPosition, currentValue);
               this.#tailPosition = this.#tailPosition + 1;
            });

        }
    }

    isEmpty() {
        return this.#headPosition === this.#tailPosition;
    }

    set(value) {
        this.#queueMap.set(this.#tailPosition, value);
        this.#tailPosition = this.#tailPosition + 1;

        return this;
    }

    get() {
        if (this.isEmpty()){
            throw new Error("Queue is empty!");
        }
        const value = this.#queueMap.get(this.#headPosition);
        this.#headPosition = this.#headPosition + 1;

        return value;
    }

    get size() {
        return this.#tailPosition - this.#headPosition;
    }
}

module.exports = Queue;