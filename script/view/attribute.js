export const attributeElement = {
  extensionContainer: {
    parentElement: ".mainContent",
    elementType: "div",
    attribute: {
      class: "extensionContainer",
    },
    uniqueParent: false,
  },
  extension: {
    parentElement: ".extensionContainer",
    elementType: "div",
    attribute: {
      id: "extension",
      class: "extension",
    },
    uniqueParent: false,
  },
  imageContainer: {
    parentElement: "#extension",
    elementType: "div",
    attribute: {
      id: "imageContainer",
      class: "imageContainer",
    },
    uniqueParent: true,
  },
  image: {
    parentElement: "#imageContainer",
    elementType: "img",
    attribute: {
      id: "extensionImg",
      class: "extensionImg",
    },
    uniqueParent: true,
  },
  infoContainer: {
    parentElement: "#extension",
    elementType: "div",
    attribute: {
      id: "infoContainer",
      class: "infoContainer",
    },
    uniqueParent: true,
  },
  infoHeader: {
    parentElement: "#infoContainer",
    elementType: "h2",
    attribute: {
      id: "infoHeader",
      class: "infoHeader",
    },
    uniqueParent: true,
  },
  infoBody: {
    parentElement: "#infoContainer",
    elementType: "p",
    attribute: {
      id: "infoBody",
      class: "infoBody",
    },
    uniqueParent: true,
  },
  actionContainer: {
    parentElement: "#extension",
    elementType: "div",
    attribute: {
      id: "actionContainer",
      class: "actionContainer",
    },
    uniqueParent: true,
  },
  removeBtn: {
    parentElement: "#actionContainer",
    elementType: "button",
    attribute: {
      type: "button",
      id: "removeBtn",
      class: "removeBtn",
    },
    textContent: "Remove",
    uniqueParent: true,
  },
};
