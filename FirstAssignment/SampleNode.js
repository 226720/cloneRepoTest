import * as utils from "./modules.js";

utils.sayHello();

let first = "Hello World!";
if (first) {
  console.log(first);
}
function Hello() {
  console.log("Hello");
}
Hello();

const list = ["Minu", "Rinu", "Liya", "Jisha"];
list.forEach((x) => console.log(x));
list.forEach(function (x) {
  console.log(x);
});

let objectOne = [
  { node: "Prince", id: "1" },
  { node: "Chris", id: "2" },
];
console.log(objectOne);
const filterList = [1, 2, 3, 4, 5, 6];
console.log("result " + filterList.filter((x) => x > 3));
const m1 = () => console.log("function M1");
m1();
const m2 = (a) => console.log("function " + a.id);
m2({ id: 1, naming: "Chris" });
