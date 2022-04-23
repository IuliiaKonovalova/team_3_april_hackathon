/* jshint esversion: 6 */
/**
 * Class representing a garbage item.
 */
export default class GarbageItem {
  constructor(jsonFile) {
    // new Garbage item should randomly choose one of the categories
    this.category = Object.keys(jsonFile)[Math.floor(Math.random() * Object.keys(jsonFile).length)];
    console.log(this.category);
    // new Garbage item should randomly choose one of the items in the category
    this.item = Object.keys(jsonFile[this.category]["type"])[Math.floor(Math.random() * Object.keys(jsonFile[this.category]["type"]).length)];
    this.imageUrl = jsonFile[this.category]["type"][this.item];
    this.x = 0;
    this.y = 0;
    this.id = Math.random();
  }
  draw(element) {
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    this.x = Math.floor(Math.random() * (width - 100));
    this.y = Math.floor(Math.random() * (height - 100));
    let item = document.createElement("img");
    item.classList.add("garbage-item");
    item.src = this.imageUrl;
    // add data-id attribute to the item
    item.setAttribute("data-id", this.id);
    item.setAttribute("data-category", this.category);
    item.style.position = "absolute";
    item.style.left = this.x + "px";
    item.style.top = this.y + "px";
    item.style.width = "100px";
    item.style.height = "100px";
    item.style.zIndex = "999999999999999";
    element.appendChild(item);
  }
  remove(screen) {
    // need to choose this exact item to remove
    let item = screen.querySelector(`img[data-id="${this.id}"]`);
    screen.removeChild(item);
  }
}
