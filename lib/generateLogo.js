//import shapes file
const shapes = require("./shapes");

//generate logo
function generateLogo({text, textColor, shape, shapeColor}) {
    let logo = '';
    
    if (shape === "Triangle") {
        logo = new shapes.Triangle(text, textColor, shapeColor).render();
    } else if (shape === "Circle") {
        logo = new shapes.Circle(text, textColor, shapeColor).render();
    } else if (shape === "Square") {
        logo = new shapes.Square(text, textColor, shapeColor).render();
    }

    // return logo
    return logo;
}
// export logo
module.exports = generateLogo;