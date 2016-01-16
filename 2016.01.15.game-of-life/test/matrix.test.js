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
        });
    });
})();