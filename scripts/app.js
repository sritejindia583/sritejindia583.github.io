/**
 * Created by sritej583 on 26/9/16.
 */
'using strict'

var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when(
        '/images', {
            templateUrl: 'templates/imagesGrid.html',
            controller: 'imagesController'
        }
    )
}])
