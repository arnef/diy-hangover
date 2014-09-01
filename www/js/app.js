/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    var app = angular.module('diy-hangover', []);



    app.controller('GameController', function($scope) {
        var _self = this;
        _self.actions70 = [];
        _self.actions20 = [];
        _self.actions10 = [];


        $scope.currentAction = "Test";

        $scope.setActions = function(actions70, actions20, actions10) {
            _self.actions70 = actions70;
            _self.actions20 = actions20;
            _self.actions10 = actions10;
            
            $scope.currentAction = _self.actions70[0].name; // just for testing
            
            $scope.$apply();
            console.log("Loading actions done");
        };
        
        $scope.getActions = function() {
            console.log("Loading actions");
            var parser = new Parser();
            parser.getAction($scope.setActions);
        };
        
        $scope.getActions();

    });
})();
