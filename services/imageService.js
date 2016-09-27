/**
 * Created by sritej583 on 27/9/16.
 */

'using strict';
myApp.factory('imageService', function () {
    var imagesData = [
        {name: 'v.o.kuma', image: 'images/vijay kumar.jpg', description: 'A very nice guy'},
        {name: 'soniya.khandhar', image: 'images/soniya.jpg', description: 'She is very sweet girl'},
        {name: 'sanjeev.kumar.suman', image: 'images/sanjeev.jpg', description: 'A very good resource teamlead'},
        {name: 'rishabh.d.arora', image: 'images/rishabh.jpg', description: 'A delhi wala'}
    ];
    return {
        getImages: function () {
            return imagesData
        }
    }
});
