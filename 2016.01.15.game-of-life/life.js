var gameOfLife = gameOfLife || {};

(function (nameSpace) {
    'use strict';
    
    nameSpace.Life = Life; 
    
    function Life() {
        this.x = 0;
    }    

})(gameOfLife);

module.exports = {
    Life: gameOfLife.Life
};