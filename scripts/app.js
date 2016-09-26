/**
 * Created by sritej583 on 26/9/16.
 */

var myApp = angular.module('myApp', [])

myApp.controller('MainController', ['$scope', function ($scope) {
    $scope.message = 'Hello Sritej'
}])
