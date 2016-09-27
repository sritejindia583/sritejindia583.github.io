/**
 * Created by sritej583 on 27/9/16.
 */
'using strict'

myApp.controller('detailController', ['$scope','$routeParams','imageService', function ($scope, $routeParams, imageService) {
    var parameter = $routeParams.imageName
    $scope.imageDetails = imageService.getDetail(parameter)
}])
