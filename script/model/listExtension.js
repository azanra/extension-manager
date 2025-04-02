export class ListExtension {
  constructor() {
    this.extensionList = [];
  }
  addToTheList(extensionItem) {
    this.extensionList.push(extensionItem);
  }
  removeExtension(inputId) {
    this.extensionList = this.extensionList.filter(
      (item) => item.id !== inputId
    );
  }
  filterActive() {
    const activeList = this.extensionList.filter(
      (item) => item.getActive() === true
    );
    return activeList;
  }
  filterInactive() {
    const inactiveList = this.extensionList.filter(
      (item) => item.getActive() === false
    );
    return inactiveList;
  }
}
