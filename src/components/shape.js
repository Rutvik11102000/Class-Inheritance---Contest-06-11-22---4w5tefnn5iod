// declare class

// export class using module.exports
const Shape = require("./shape");

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = Circle;
