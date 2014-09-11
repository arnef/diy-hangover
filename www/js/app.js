/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    var app = angular.module('diy-hangover', ['ngRoute', 'ngTouch', 'mgo-mousetrap']);

    app.config(function($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'pages/player.html',
                    controller: 'PlayerController',
                    controllerAs: 'playerCtrl'
                })
                .when('/game', {
                    templateUrl: 'pages/game.html',
                    controller: 'GameController',
                    controllerAs: 'gameCtrl'
                });
    });

    app.controller('AppController', function($scope) {
        $scope.APP_NAME = 'DIY-Hangover';
        $scope.players = [];
        $scope.activeRules = [];
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
            _self.initGame();
            $scope.$apply();
            console.log("Loading actions DONE");
        };

        $scope.getActions = function() {
            console.log("Loading actions");
            var parser = new Parser();
            parser.getAction($scope.setActions);
        };

        _self.initGame = function() {
            _self.game = new Game($scope.players, _self.actions70, _self.actions20, _self.actions10, $scope.activeRules);
        };

        _self.nextAction = function() {
            _self.game.next();
        };


        _self.showRules = function() {
            $('#rulesModal').modal('toggle');
        };

        _self.hasActiveRules = function() {
            return $scope.activeRules.length > 0;
        };

        _self.showTooltip = function() {
            if (_self.game.currentAction.hasTooltip()) {
                $('#myModal').modal('toggle');
            }
        };

        $scope.getActions();

    });

    app.controller('PlayerController', function($scope) {

        var _self = this;
        _self.newplayer = "";

        _self.addPlayer = function() {
            if (_self.newplayer !== "") {
                $scope.players.push(_self.newplayer);
                _self.newplayer = "";
            }
        };

        _self.removePlayer = function(index) {
            $scope.players.splice(index, 1);
        };


        _self.removePlayers = function() {
            $scope.players.length = 0;
        };

        _self.hasPlayers = function() {
            return $scope.players.length > 0;
        };

        _self.hasActiveRules = function() {
            return $scope.activeRules.length > 0;
        };

        _self.newGame = function() {
            console.log('new game');
            $scope.activeRules.length = 0;
        };

    });


})();


