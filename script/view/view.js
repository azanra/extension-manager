import { attributeElement } from "./attribute.js";

export class View {
  constructor() {
    this.extensionListContainer = document.querySelector(".mainContent");
  }
  static setMultipleAttr(attributeObject, element, customAttribute) {
    for (let attribute in attributeObject) {
      if (attribute === "id" && customAttribute !== undefined) {
        element.setAttribute(
          attribute,
          `${attributeObject[attribute]}-${customAttribute}`
        );
      } else {
        element.setAttribute(attribute, attributeObject[attribute]);
      }
    }
  }
  static setTextContent(element, elementTextContent) {
    if (elementTextContent) {
      element.textContent = elementTextContent;
    }
  }
  static createElement(element, customAttribute) {
    const parentElement = document.querySelector(element.parentElement);
    const newElement = document.createElement(element.elementType);
    View.setMultipleAttr(element.attribute, newElement, customAttribute);
    View.setTextContent(newElement, element.textContent);
    parentElement.append(newElement);
  }
  createExtensionCart(extension) {
    View.createElement(attributeElement.extension, extension.id);
  }
  displayExtension(extensionArray) {
    View.createElement(attributeElement.extensionContainer);
    const extensionList = extensionArray.getExtensionList();
    extensionList.map((item) => {
      this.createExtensionCart(item);
    });
  }
}
