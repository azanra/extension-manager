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
};
