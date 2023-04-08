//parent class
class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}
//shape classes
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, shapeColor, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

          <rect width="300" height="200" fill="${this.shapeColor}" />

          <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="60">${this.text}</text>

        </svg>`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, shapeColor, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

          <circle cx="50%" cy="50%" r="50%" fill="${this.shapeColor}" />

          <text x="150" y="210" text-anchor="middle" fill="${this.textColor}" font-size="60">${this.text}</text>

        </svg>`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, shapeColor, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

          <polygon points="150, 18 282, 283 18, 283" fill="${this.shapeColor}" />

          <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="60">${this.text}</text>

        </svg>`;
    }
}

module.exports = {Square, Circle, Triangle};