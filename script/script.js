import { Extension } from "./model/extension.js";
import { ListExtension } from "./model/listExtension.js";
import { View } from "./view/view.js";

const firstExtension = new Extension(1, "src", "name", "desc", true);
const secondExtension = new Extension(2, "owo", "uwu", "ewe", true);
const thirdExtension = new Extension(3, "hello", "world", "learning", true);
const fourthExtension = new Extension(4, "wow", "wew", "wuw", false);

const listExtension = new ListExtension();
console.log(listExtension);

listExtension.addToTheList(firstExtension);
listExtension.addToTheList(secondExtension);
listExtension.addToTheList(thirdExtension);
listExtension.addToTheList(fourthExtension);

console.log(listExtension);

console.log(listExtension.getExtensionList());
const view = new View();
view.displayExtension(listExtension);
