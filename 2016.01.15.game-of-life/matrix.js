var gameOfLife = gameOfLife || {};

(function (nameSpace) {
    'use strict';
    
    nameSpace.Matrix = Matrix; 
    
    function Matrix() {
        this.author = 'god'; 
        this.maxWidth = 0;
        this.maxHeight = 0;
        this.matrix = new Array(new Array()); 
    }    
    
    Matrix.prototype.createBoard = function () {
        var self = this; 
        var x, y; 
        
        for (y = 0; y < self.maxHeight; y += 1) {
            self.matrix[y] = new Array(self.maxWidth); 
        }
                        
        return self.matrix;   
    };
    
    Matrix.prototype.getLife = function (targetX, targetY) {
       var self = this; 
       
       return self.matrix[targetY][targetX];  
    }; 
    
    Matrix.prototype.createLife = function (newLife) {
       var self = this; 
       
       self.matrix[newLife.y][newLife.x] = newLife; 
    }; 
    
})(gameOfLife);

module.exports = {
    Matrix: gameOfLife.Matrix
};