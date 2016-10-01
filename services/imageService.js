/**
 * Created by sritej583 on 27/9/16.
 */

'using strict';
myApp.factory('imageService', function () {
    var imagesData = [
        {
            name: 'Vijay Kumar',
            image: 'images/vijay kumar.jpg',
            description: 'It\'s been always pleasure to work with you. Thanks for the most memorable experiences and parties. I hope we continue our travelling for the rest of the times.'
        },
        {
            name: 'Soniya Khandhar',
            image: 'images/soniya.jpg',
            description: 'I cannot forget your support during this project tenure. Thanks is a very small word. But still thanks for continuously reviewing my work products, suggesting valuable implications, assigning me in interface, where I exposed good tools and processes which inspired me to learn more new technologies. Always glad to work in your team.'
        },
        {
            name: 'Sanjeev Kumar Suman',
            image: 'images/sanjeev.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Rishabh Arora',
            image: 'images/rishabh.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Apurva Dehulia',
            image: 'images/apurva.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Dinesh BM',
            image: 'images/dinesh_bm.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Dinesh Kamat',
            image: 'images/dinesh_kamat.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Mohit Bansal',
            image: 'images/mohit.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Nilima Gavande',
            image: 'images/nilima.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Richa Prasad',
            image: 'images/richa.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Suchandrima Das',
            image: 'images/suchi.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Vivek Trivedi',
            image: 'images/vivek.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Pratyush Kushwah',
            image: 'images/pratyush.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Natraj Ramamoorty',
            image: 'images/natraj.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Nikhil Gulati',
            image: 'images/nikhil.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Prateek Shinde',
            image: 'images/prateek.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Vishal Urankar',
            image: 'images/vishal.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Shradhha Lokhande',
            image: 'images/shradha.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Krishna Kapadia',
            image: 'images/krishna.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Karthik Bafna',
            image: 'images/kathik.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Himanshu Pandey',
            image: 'images/himanshu.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Sachin Neema',
            image: 'images/na.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Deepali Dodamani',
            image: 'images/deepali.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Amit Singh Prakash',
            image: 'images/amit.jpg',
            description: 'Thanks for all the support and cooperation. Thanks for valuable guidance in times of need and making our life easier in the project. '
        },
        {
            name: 'Carol Christine Dias',
            image: 'images/carol.jpg',
            description: 'Thanks for your cooperation.  '
        },
        {
            name: 'Neelkanth Patel',
            image: 'images/neel.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Rohini Govindarajan',
            image: 'images/rohini.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Manoj Parlikar',
            image: 'images/manoj.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        },
        {
            name: 'Anand Prakash Singh',
            image: 'images/anand.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque, arcu eget euismod ultrices, mauris tortor dapibus arcu, at ullamcorper sem quam ut neque. Pellentesque eget metus aliquam, lobortis magna non, blandit massa. Donec laoreet nisl sit amet velit auctor, ac dictum massa lobortis. Integer dolor elit, consequat at mattis id, eleifend vel lacus. Integer sed tempor elit, sit amet feugiat nisl. Sed sollicitudin ante ligula, vel congue diam ultrices et. Etiam pharetra est augue, ut ultrices leo molestie sit amet. Nam vel malesuada magna, id tristique tellus. Vestibulum ut diam vitae sapien laoreet imperdiet in in tortor. Nullam vehicula pulvinar fringilla.'
        }
    ];
    return {
        getImages: function () {
            return imagesData
        },
        getDetail: function (name) {
            for (var item in imagesData) {
                /* console.log(item)
                 console.log(imagesData[item])*/
                if(imagesData[item].name == name) {
                    return imagesData[item]
                } else {

                }
            }
        }
    }
});
