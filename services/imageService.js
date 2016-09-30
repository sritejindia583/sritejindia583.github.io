/**
 * Created by sritej583 on 27/9/16.
 */

'using strict';
myApp.factory('imageService', function () {
    var imagesData = [
        {name: 'Vijay Kumar', image: 'images/vijay kumar.jpg', description: 'A very nice guy'},
        {name: 'Soniya Khandhar', image: 'images/soniya.jpg', description: 'No comments'},
        {name: 'Sanjeev Kumar Suman', image: 'images/sanjeev.jpg', description: 'A very good resource teamlead'},
        {name: 'Rishabh Arora', image: 'images/rishabh.jpg', description: 'A delhi wala'},
        {name: 'Apurva Dehulia', image: 'images/apurva.jpg', description: ''},
        {name: 'Dinesh BM', image: 'images/dinesh_bm.jpg', description: ''},
        {name: 'Dinesh Kamat', image: 'images/dinesh_kamat.jpg', description: ''},
        {name: 'Mohit Bansal', image: 'images/mohit.jpg', description: ''},
        {name: 'Nilima Gavande', image: 'images/nilima.jpg', description: ''},
        {name: 'Richa Prasad', image: 'images/richa.jpg', description: ''},
        {name: 'Suchandrima Das', image: 'images/suchi.jpg', description: ''},
        {name: 'Vivek Trivedi', image: 'images/vivek.jpg', description: ''},
        {name: 'Pratyush Kushwah', image: 'images/pratyush.jpg', description: ''},
        {name: 'Natraj Ramamoorty', image: 'images/natraj.jpg', description: ''},
        {name: 'Nikhil Gulati', image: 'images/nikhil.jpg', description: ''},
        {name: 'Prateek Shinde', image: 'images/prateek.jpg', description: ''},
        {name: 'Vishal Urankar', image: 'images/vishal.jpg', description: ''},
        {name: 'Shradhha Lokhande', image: 'images/shradha.jpg', description: ''},
        {name: 'Krishna Kapadia', image: 'images/krishna.jpg', description: ''},
        {name: 'Karthik Bafna', image: 'images/kathik.jpg', description: ''},
        {name: 'Himanshu Pandey', image: 'images/himanshu.jpg', description: ''},
        {name: 'Sachin Neema', image: 'images/na.jpeg', description: ''},
        {name: 'Deepali Dodamani', image: 'images/na.jpeg', description: ''},
        {name: 'Amit Singh Prakash', image: 'images/amit.jpg', description: ''},
        {name: 'Carol Christine Dias', image: 'images/carol.jpg', description: ''},
        {name: 'Neelkanth Patel', image: 'images/neel.jpg', description: ''},
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
