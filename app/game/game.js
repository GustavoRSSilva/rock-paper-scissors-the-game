'use strict';

var app = angular.module('myApp.game', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/game', {
        templateUrl: 'game/game.html',
        controller: 'GameCtrl',
        controllerAs: 'GameCtrl'
    });
}]);

app.controller('GameCtrl', [function() {
    const scissors = "Scissors";
    const paper = "Paper";
    const rock = "Rock";
    const player1 = 'you';
    const cpu = 'cpu';
    this.choises = [rock, paper, scissors];
    this.yourChoise = this.choises[0];
    this.cpuChoise = null;
    this.result = '';

    this.gameScore = {
        'you': 0,
        'cpu': 0
    };

    this.init = function() {
        this.yourChoise = null;
        this.cpuChoise = null;
        this.result = '';
    }


    var _self = this;

    this.getResult = function() {
        _self.generateCpuChoise(_self.choises);
        var choises = _self.choises,
            choise1 = _self.yourChoise,
            choise2 = _self.cpuChoise,
            result = '';

        if (choise1 === choise2) {
            result = "The result is a tie";
            return _self.updateResult(null, result);
        }

        if (choise1 === rock) {
            if (choise2 === scissors) {
                result = "Rock wins";
                return _self.updateResult(player1, result);
            } else {
                result = "Paper wins";
                return _self.updateResult(cpu, result);
            }
        }

        if (choise1 === paper) {
            if (choise2 === rock) {
                result = "Paper wins";
                return _self.updateResult(player1, result);
            } else {
                result = "Scissors wins";
                return _self.updateResult(cpu, result);
            }
        }

        if (choise1 === scissors) {
            if (choise2 === paper) {
                result = "Scissors wins";
                return _self.updateResult(player1, result);
            } else {
                result = "Rock wins";
                return _self.updateResult(cpu, result);
            }
        }
    };


    this.updateResult = function(winner, result) {
        if (winner) {
            _self.gameScore[winner]++;
        }
        _self.result = result + '!';
    }

    this.generateCpuChoise = function(choises) {
        if (choises) {
            _self.cpuChoise = choises[Math.floor(Math.random() * 3)];
        } else {
            _self.cpuChoise = null;
        }
    }

}]);
