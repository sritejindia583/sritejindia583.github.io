/**
 * Created by sritej583 on 28/9/16.
 */

myApp.controller('BtnController', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.backFunction = function () {
        $window.history.back()
        //console.log($location)
    }
}])
