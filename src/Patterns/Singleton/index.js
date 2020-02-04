class Singleton {
  static _instance = null;

  constructor(name, weight) {
    if (Singleton._instance){
      return Singleton._instance;
    }

    if (!name && !Singleton._instance){
      throw new Error('Object hasn\'t been created yet!');
    }

    this.name = name;
    this.weight = weight;

    Singleton._instance = this;
  }

  static getInstance(...args) {
    return new Singleton(...args);
  }

  printInfo() {
    console.log(`Name: ${this.name} \nWeight: ${this.weight}\n`);
  }
}

module.exports = Singleton;
