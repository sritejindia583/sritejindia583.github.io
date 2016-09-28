/**
 * Created by sritej583 on 28/9/16.
 */

myApp.controller('BtnController', ['$scope','$window', function ($scope, $window) {
    $scope.backFunction = function () {
        $window.history.back()
    }
}])
