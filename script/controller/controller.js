import { View } from "../view/view.js";
import { attributeElement } from "../view/attribute.js";

export class Controller {
  constructor(listExtension) {
    this.listExtension = listExtension;
    this.view = new View();
    this.displayExtension(listExtension.getExtensionList());
    this.activeFilter();
    this.inactiveFilter();
    this.allFilter();
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
      View.deleteList();
      const activeList = this.listExtension.filterActive();
      console.log(activeList);
      this.displayExtension(activeList);
    });
  }
  inactiveFilter() {
    const inactiveOption = document.querySelector("#inactiveOption");
    inactiveOption.addEventListener("click", () => {
      View.deleteList();
      const inactiveList = this.listExtension.filterInactive();
      console.log(inactiveList);
      this.displayExtension(inactiveList);
    });
  }
  allFilter() {
    const allOption = document.querySelector("#allOption");
    allOption.addEventListener("click", () => {
      View.deleteList();
      const extensionList = this.listExtension.getExtensionList();
      console.log(extensionList);
      this.displayExtension(extensionList);
    });
  }
}
