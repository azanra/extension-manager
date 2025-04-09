import { View } from "../view/view.js";
import { attributeElement } from "../view/attribute.js";

export class Controller {
  constructor(listExtension) {
    this.listExtension = listExtension;
    this.view = new View();
    this.displayExtension(listExtension.getExtensionList());
    this.activeFilter();
  }
  displayExtension(extensionArray) {
    View.createElement(attributeElement.extensionContainer);
    const extensionList = extensionArray;
    extensionList.map((item) => {
      this.view.createExtensionCart(item);
    });
  }
  activeFilter() {
    const activeOption = document.querySelector("#activeOption");
    activeOption.addEventListener("click", () => {
      const activeList = this.listExtension.filterActive();
      console.log(activeList);
      View.deleteList();
      this.displayExtension(activeList);
    });
  }
}
