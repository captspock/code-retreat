(function () {
    'use strict';

    var assert = require('assert');
    var matrixModule = require('../matrix');

    describe('In the Game of Life,', function () {
        describe('A Matrix', function () {
            it('shall have a maximum width', function () {
                var expectedMaximumWidth = 100;
                var matrix = new matrixModule.Matrix();
                matrix.maxWidth = expectedMaximumWidth;

                assert.equal(matrix.maxWidth, expectedMaximumWidth);
            });

            it('shall have a maximum height', function () {
                var expectedMaximumHeight = 50;
                var matrix = new matrixModule.Matrix();
                matrix.maxHeight = expectedMaximumHeight;

                assert.equal(matrix.maxHeight, expectedMaximumHeight);
            });
            
            it('shall have ability to create a matrix (board) with width X height cells', function () {
                var matrix = new matrixModule.Matrix(); 
                var expectedMatrix = [[,], [,], [,], [,]]; 
                
                matrix.maxWidth = 2; 
                matrix.maxHeight = 4; 
                
                assert.deepEqual(matrix.create(), expectedMatrix); 
            }); 
        });
    });
})();