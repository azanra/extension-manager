import { attributeElement } from "./attribute.js";

export class View {
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

  static addExtensionStateAttribute(
    extensionAttribute,
    elementAttribute,
    extensionList
  ) {
    const extensionId = extensionAttribute.id;
    const extensionState = extensionList.getExtensionState(extensionId);
    elementAttribute.attribute.checked = extensionState;
  }

  static deleteList() {
    const extensionContainer = document.querySelector(".extensionContainer");
    extensionContainer.remove();
  }

  static getId(element) {
    const idElement = element.id;
    const id = idElement.split("-");
    return Number(id[1]);
  }

  createExtensionCart(extension, extensionList) {
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
    View.createElement(attributeElement.labelSwitch, extension);
    View.addExtensionStateAttribute(
      extension,
      attributeElement.toggleSwitch,
      extensionList
    );
    View.createElement(attributeElement.toggleSwitch, extension);
    View.createElement(attributeElement.toggleSlider, extension);
  }
}
