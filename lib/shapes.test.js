// import shapes to be tested
const { describe } = require('yargs');
const Shapes = require('./shapes');

// square test
describe('Shapes', () => {
    describe('Square', () => {
        it('should return a square svg with user input', () => {
            const square = new Shapes.Square("svg", "black", "white");
            expect(square.rendor()).toEqual('<rect fill="black" width="300" height="200" />');
        });
    });
});

// circle test
describe('Shapes', () => {
    describe('Circle', () => {
        it('should return a circle svg with user input', () => {
            const circle = new Shapes.Circle("svg", "black", "white");
            expect(square.rendor()).toEqual('<rect fill="black" circle cx="150" cy="100" r="100" />');
        });
    });
});

// triangle test

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return a triangle svg with user input', () => {
            const triangle = new Shapes.Triangle("svg", "black", "white");
            expect(square.rendor()).toEqual('<rect fill="black" <polygon points="150, 18 282, 283 18, 283" />');
        });
    });
});