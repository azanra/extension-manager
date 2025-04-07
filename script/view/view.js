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
    const parentElement = View.referenceParent(element, customAttribute?.id);
    const newElement = document.createElement(element.elementType);
    View.setMultipleAttr(element.attribute, newElement, customAttribute?.id);
    View.setTextContent(newElement, element.textContent);
    parentElement.append(newElement);
  }

  static referenceParent(element, customAttribute) {
    if (element.uniqueParent === true) {
      return document.querySelector(
        `${element.parentElement}-${customAttribute}`
      );
    } else {
      return document.querySelector(element.parentElement);
    }
  }

  static addSrcAttribute(extensionAttribute, elementAttribute) {
    elementAttribute.attribute.src = extensionAttribute.src;
  }

  static addNameAttribute(extensionAttribute, elementAttribute) {
    elementAttribute.textContent = extensionAttribute.name;
  }

  static addDescriptionAttribute(extensionAttribute, elementAttribute) {
    elementAttribute.textContent = extensionAttribute.description;
  }

  createExtensionCart(extension) {
    View.createElement(attributeElement.extension, extension);
    View.createElement(attributeElement.imageContainer, extension);
    View.addSrcAttribute(extension, attributeElement.image);
    View.createElement(attributeElement.image, extension);
    View.createElement(attributeElement.infoContainer, extension);
    View.addNameAttribute(extension, attributeElement.infoHeader);
    View.createElement(attributeElement.infoHeader, extension);
    View.addDescriptionAttribute(extension, attributeElement.infoBody);
    View.createElement(attributeElement.infoBody, extension);
    View.createElement(attributeElement.actionContainer, extension);
    View.createElement(attributeElement.removeBtn, extension);
  }

  displayExtension(extensionArray) {
    View.createElement(attributeElement.extensionContainer);
    const extensionList = extensionArray.getExtensionList();
    extensionList.map((item) => {
      this.createExtensionCart(item);
    });
  }
}
