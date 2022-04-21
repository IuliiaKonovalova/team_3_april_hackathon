/* jshint esversion: 6 */
/**
 * Class representing a garbage item.
 */
export default class GarbageItem {
    constructor(jsonFile) {
        // json file looks like this:
        // {
        //   "recyclable": {
        //     "item1": path to image,
        //     "item2": path to image,
        //   ...},
        //  "non-recyclable": {
        //     "item1": path to image,
        //     "item2": path to image,
        //  ...},
        //   "organic": {
        //     "item1": path to image,
        //     "item2": path to image,
        //   ...}
        // }
        // new Garbage item should randomly choose one of the categories
        this.category = Object.keys(jsonFile)[Math.floor(Math.random() * Object.keys(jsonFile).length)];
        // new Garbage item should randomly choose one of the items in the category
        this.item = Object.keys(jsonFile[this.category])[Math.floor(Math.random() * Object.keys(jsonFile[this.category]).length)];
        this.imageUrl = jsonFile[this.category][this.item];
        this.x = 0;
        this.y = 0;        
    }
    draw(element) {
        let width = element.offsetWidth;
        let height = element.offsetHeight;
        this.x = Math.floor(Math.random() * (width - 100));
        this.y = Math.floor(Math.random() * (height - 100));
        let item = document.createElement("img");
        item.src = this.imageUrl;
        item.style.position = "absolute";
        item.style.left = this.x + "px";
        item.style.top = this.y + "px";
        item.style.width = "100px";
        item.style.height = "100px";
        element.appendChild(item);
    }
    remove(screen) {
        screen.remove(this);
    }

    
}