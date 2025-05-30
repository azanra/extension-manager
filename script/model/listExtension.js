import { Extension } from "./extension.js";

export class ListExtension {
  #extensionList;

  constructor() {
    this.#extensionList = [];
  }

  addToTheList(extensionArr) {
    extensionArr.forEach((item) => {
      let extensionItem = new Extension(
        item.id,
        item.src,
        item.name,
        item.description,
        item.isActive
      );
      this.#extensionList.push(extensionItem);
    });
  }

  removeExtension(inputId) {
    this.#extensionList = this.#extensionList.filter(
      (item) => item.id !== inputId
    );
  }

  filterActive() {
    const activeList = this.#extensionList.filter(
      (item) => item.getActive() === true
    );
    return activeList;
  }

  filterInactive() {
    const inactiveList = this.#extensionList.filter(
      (item) => item.getActive() === false
    );
    return inactiveList;
  }

  updateState(inputId) {
    this.#extensionList.map((item) => {
      if (item.id === inputId) {
        item.setActive();
      }
      return item;
    });
  }

  getExtensionState(inputId) {
    let extensionState;
    this.#extensionList.forEach((item) => {
      if (item.id === inputId) {
        extensionState = item.getActive();
      }
    });
    return extensionState;
  }

  getExtensionList() {
    return this.#extensionList;
  }
}
