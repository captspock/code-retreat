var gameOfLife = gameOfLife || {};

(function (nameSpace) {
    'use strict';
    
    nameSpace.Life = Life; 
    
    function Life() {
        this.x = 0;
        this.y = 0; 
        this.isAlive = false; 
    }    

})(gameOfLife);

module.exports = {
    Life: gameOfLife.Life
};