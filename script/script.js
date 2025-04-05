import { data } from "./model/data.js";
import { ListExtension } from "./model/listExtension.js";
import { View } from "./view/view.js";

const listExtension = new ListExtension();
console.log(listExtension);

listExtension.addToTheList(data);

console.log(listExtension);

console.log(listExtension.getExtensionList());
const view = new View();
view.displayExtension(listExtension);
