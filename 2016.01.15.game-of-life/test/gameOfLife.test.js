var assert = require('assert');
var gameOfLife = require('../gameOfLife');

describe('In the Game of Life,', function () {
    describe('The matrix', function () {
        it('shall have a maximum horizontal length', function () {
            var expectedMaximumXLength = 100; 
            var matrix = new gameOfLife.Matrix();
            matrix.maximumX = expectedMaximumXLength; 
            
            assert.equal(matrix.maximumX, expectedMaximumXLength);    
        }); 
    });
});