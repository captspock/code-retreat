(function () {
    'use strict';

    var assert = require('assert');
    var lifeModule = require('../life');

    describe('In the Game of Life,', function () {
        describe('A Life', function () {
            it('shall have a X coordinate', function () {
                var expectedXCoordinate = 10;
                var life = new lifeModule.Life();

                life.x = expectedXCoordinate;

                assert.equal(life.x, expectedXCoordinate);
            });

            it('shall have a Y coordinate', function () {
                var expectedYCoordinate = 20;
                var life = new lifeModule.Life();

                life.y = expectedYCoordinate;

                assert.equal(life.y, expectedYCoordinate);
            });
        });
    });
})();