/**
 * Created by sritej583 on 27/9/16.
 */
'using strict'

myApp.controller('detailController', ['$scope','$routeParams','imageService','$location', function ($scope, $routeParams, imageService, $location) {
    var parameter = $routeParams.imageName
    $scope.imageDetails = imageService.getDetail(parameter)
}])
