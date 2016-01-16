var gameOfLife = gameOfLife || {};

(function (nameSpace) {
    'use strict';
    
    nameSpace.Matrix = Matrix; 
    
    function Matrix() {
        this.maxWidth = 0;
        this.maxHeight = 0; 
    }    

})(gameOfLife);

module.exports = {
    Matrix: gameOfLife.Matrix
};