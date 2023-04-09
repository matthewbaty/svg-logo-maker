// import shapes to be tested
const Shapes = require('./shapes');

// square test
describe('Shapes', () => {
    describe('Square', () => {
        it('should return a square svg with user input', () => {
            const square= new Shapes.Square("img", "black", "white").render();
            expect(square).toContain(`<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"300\" height=\"200\" fill=\"white\" /><text x=\"50%\" y=\"50%\" text-anchor=\"middle\" fill=\"black\" font-size=\"60\">img</text></svg>`);
        });
    });
});

// circle test
describe('Shapes', () => {
    describe('Circle', () => {
        it('should return a circle svg with user input', () => {
            const circle = new Shapes.Circle("svg", "black", "white").render();
            expect(circle).toContain('<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"100\" r=\"100\" fill=\"white\" /><text x=\"150\" y=\"130\" text-anchor=\"middle\" fill=\"black\" font-size=\"60\">svg</text></svg>');
        });
    });
});

// triangle test
describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return a triangle svg with user input', () => {
            const triangle = new Shapes.Triangle("svg", "black", "white").render();
            expect(triangle).toContain('<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"150, 18 282, 283 18, 283\" fill=\"white\" /><text x=\"150\" y=\"192\" text-anchor=\"middle\" fill=\"black\" font-size=\"60\">svg</text></svg>');
        });
    });
});

