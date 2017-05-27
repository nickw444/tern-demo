import { Cat } from '/animals/cat';

export class Farm {
  constructor(cats) {
    this.cats = cats
  }

  static of() {
    return new Farm([
      new Cat();
    ])
  }
}
