import { Controller } from "./controller/controller.js";
import { data } from "./model/data.js";
import { ListExtension } from "./model/listExtension.js";

const listExtension = new ListExtension();
console.log(listExtension);

listExtension.addToTheList(data);

console.log(listExtension);

console.log(listExtension.getExtensionList());
const controller = new Controller(listExtension);
