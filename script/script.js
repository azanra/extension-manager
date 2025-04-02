import { Extension } from "./model/extension.js";
import { ListExtension } from "./model/listExtension.js";

const firstExtension = new Extension(1, "src", "name", "desc", true);
const secondExtension = new Extension(2, "owo", "uwu", "ewe", true);
const thirdExtension = new Extension(3, "hello", "world", "learning", true);
const fourthExtension = new Extension(4, "wow", "wew", "wuw", false);

console.log(firstExtension);
firstExtension.setActive();
console.log(firstExtension);
console.log(firstExtension.getActive());

const listExtension = new ListExtension();
console.log(listExtension);

listExtension.addToTheList(firstExtension);
listExtension.addToTheList(secondExtension);
listExtension.addToTheList(thirdExtension);
listExtension.addToTheList(fourthExtension);

console.log(listExtension);

listExtension.removeExtension(2);

console.log(listExtension);

console.log(listExtension.filterActive());
console.log(listExtension.filterInactive());

console.log(listExtension);
listExtension.updateState(1);

console.log(listExtension.getExtensionState(1));
