import { Extension } from "./model/extension.js";

const firstExtension = new Extension(1, "src", "name", "desc", true);

console.log(firstExtension);
firstExtension.setActive();
console.log(firstExtension);
console.log(firstExtension.getActive());
