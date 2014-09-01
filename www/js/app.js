/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    var app = angular.module('diy-hangover', []);
    
    
    
    app.controller('GameController', function($scope) {
        var _self = this;
        var parser = new Parser();
        console.log(parser.actions20);
        var bla = parser.actions20.length;
        
        console.log(bla);
        
        _self.first = bla;
        
        $scope.setFirst = function (newFirst) {
            _self.first = newFirst;
        }
        
    });
})();
