export class Extension {
  #isActive;
  constructor(id, src, name, description, isActive) {
    this.id = id;
    this.src = src;
    this.name = name;
    this.description = description;
    this.#isActive = isActive;
  }
  setActive() {
    this.#isActive = !this.#isActive;
  }
  getActive() {
    return this.#isActive;
  }
}
