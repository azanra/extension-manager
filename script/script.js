import { Extension } from "./model/extension.js";
import { ListExtension } from "./model/listExtension.js";

const firstExtension = new Extension(1, "src", "name", "desc", true);
const secondExtension = new Extension(2, "owo", "uwu", "ewe", true);

console.log(firstExtension);
firstExtension.setActive();
console.log(firstExtension);
console.log(firstExtension.getActive());

const listExtension = new ListExtension();
console.log(listExtension);

listExtension.addToTheList(firstExtension);
listExtension.addToTheList(secondExtension);

console.log(listExtension);

listExtension.removeExtension(2);

console.log(listExtension);
