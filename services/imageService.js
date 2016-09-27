/**
 * Created by sritej583 on 27/9/16.
 */

'using strict';
myApp.factory('imageService', function () {
    var imagesData = [
        {name: 'Vijay Kumar', image: 'images/vijay kumar.jpg', description: 'A very nice guy'},
        {name: 'Soniya Khandhar', image: 'images/soniya.jpg', description: 'No comments'},
        {name: 'Sanjeev Kumar Suman', image: 'images/sanjeev.jpg', description: 'A very good resource teamlead'},
        {name: 'Rishabh Arora', image: 'images/rishabh.jpg', description: 'A delhi wala'}
    ];
    return {
        getImages: function () {
            return imagesData
        },
        getDetail: function (name) {
            for (var item in imagesData) {
                console.log(item)
                console.log(imagesData[item])
                if(imagesData[item].name == name) {
                    return imagesData[item]
                } else {

                }
            }
        }
    }
});
