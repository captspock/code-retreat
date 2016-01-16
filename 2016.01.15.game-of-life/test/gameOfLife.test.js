var assert = require('assert');
var gameOfLife = require('../gameOfLife');

describe('In the Game of Life,', function () {
    describe('The Matrix', function () {
        it('shall have a maximum width', function () {
            var expectedMaximumWidth = 100; 
            var matrix = new gameOfLife.Matrix();
            matrix.maxWidth = expectedMaximumWidth; 
            
            assert.equal(matrix.maxWidth, expectedMaximumWidth);    
        }); 
        
        it('shall have a maximum height', function () {
            var expectedMaximumHeight = 50; 
            var matrix = new gameOfLife.Matrix();
            matrix.maxHeight = expectedMaximumHeight; 
            
            assert.equal(matrix.maxHeight, expectedMaximumHeight);    
        }); 
    });
});