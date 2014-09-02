/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    var app = angular.module('diy-hangover', ['ngRoute']);

    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'pages/player.html'
      })
        .when('/game', {
          templateUrl: 'pages/game.html',
          controller: 'GameController',
          controllerAs: 'gameCtrl'
        });
    });


    app.controller('GameController', function($scope) {
        var _self = this;
        _self.actions70 = [];
        _self.actions20 = [];
        _self.actions10 = [];
        _self.game = null;
        
        
        $scope.setActions = function(actions70, actions20, actions10) {
            _self.actions70 = actions70;
            _self.actions20 = actions20;
            _self.actions10 = actions10;
            console.log(_self.actions20);
            _self.initGame();
            $scope.$apply();
            console.log("Loading actions done");
        };
        
        $scope.getActions = function() {
            console.log("Loading actions");
            var parser = new Parser();
            parser.getAction($scope.setActions);
        };
        
        _self.initGame = function() {
            _self.game = new Game(["arne", "an3"], _self.actions70, _self.actions20, _self.actions10);
        };
        
        
        $scope.getActions();

    });
})();
