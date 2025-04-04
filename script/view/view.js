class View {
  constructor() {
    this.extensionListContainer = document.querySelector(".mainContent");
  }
  static setMultipleAttr(attributeObject, element, customAttribute) {
    for (let attribute in attributeObject) {
      if (attribute === id && customAttribute !== undefined) {
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
}
