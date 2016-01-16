var gameOfLife = gameOfLife || {};

(function (nameSpace) {
    'use strict';
    
    nameSpace.Matrix = Matrix; 
    
    function Matrix() {
        this.maxWidth = 0;
        this.maxHeight = 0;
        this.matrix = new Array(new Array()); 
    }    
    
    Matrix.prototype.create = function () {
        var self = this; 
        var x, y; 
        
        for (y = 0; y < self.maxHeight; y += 1) {
            self.matrix[y] = new Array(self.maxWidth); 
        }
                        
        return self.matrix;   
    };
    
})(gameOfLife);

module.exports = {
    Matrix: gameOfLife.Matrix
};