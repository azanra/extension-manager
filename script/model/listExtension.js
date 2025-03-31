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
}
