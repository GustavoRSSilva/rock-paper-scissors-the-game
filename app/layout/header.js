'use strict';

var app = angular.module('myApp.header', []);

app.directive('gameHeader', function() {
    return {
        restrict: "E",
        templateUrl: "layout/header.html",
        controller: function() {
            var date = new Date();
            this.copyRight = "©" + date.getFullYear() + " Gustavo Silva";
        },
        controllerAs: 'header'
    };
});
