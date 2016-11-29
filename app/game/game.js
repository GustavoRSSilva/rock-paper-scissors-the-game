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
    const player1 = 0;
    const cpu = 1;
    this.choises = [rock, paper, scissors];

    console.log(this.choises);
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

    this.getResult = function(choise1, choise2) {
        var winner = '',
            result = '',
            choises = _self.choises;

        if (choise1 == choises[choiseId2]) {
            _self.result = "The result is a tie!";
        }


        if (choise1 == rock) {
            if (choise2 == scissors) {
                _self.result = "rock wins";

            } else {
                _self.result = "paper wins";
            }
        }

        if (choise1 == paper) { //condition 3
            if (choise2 == rock)
                _self.result = "paper wins";
            else
                _self.result = "scissors wins";
        }

        if (choise1 == "scissors") {
            if (choise2 == "rock")
                _self.result = "rock wins";
            else {
                _self.result = "scissors wins";
            }
        }
    };


    this.updateResult = function(winnerId) {
        _self.gameScore[winner]++;
    }
}]);
