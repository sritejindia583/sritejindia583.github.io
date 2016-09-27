/**
 * Created by sritej583 on 27/9/16.
 */
'using strict'

myApp.controller('imagesController', ['$scope','imageService', function ($scope, imageService) {
    $scope.images = imageService.getImages()
}])
