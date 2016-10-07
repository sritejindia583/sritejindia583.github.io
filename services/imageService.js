/**
 * Created by sritej583 on 27/9/16.
 */

'using strict';
myApp.factory('imageService', function () {
    var imagesData = [
        {
            name: 'Vijay Kumar',
            image: 'images/vijay kumar.jpg',
            description: 'It\'s been always pleasure to work with you. Thanks for the most memorable experiences and parties. I hope we continue our travelling for the rest of times.'
        },
        {
            name: 'Soniya Khandhar',
            image: 'images/soniya.jpg',
            description: 'I cannot forget your support during this project tenure. Thanks is a very small word. But still thanks for continuously reviewing my work products, suggesting valuable implications, assigning me in interface, where I got exposed to good tools and processes which inspired me to learn more new things. Always glad to work in your team.'
        },
        {
            name: 'Sanjeev Kumar Suman',
            image: 'images/sanjeev.jpg',
            description: 'Thanks for standing in support for me all the times. I am very glad to share many memorable experiences and hope continue this in future too.'
        },
        {
            name: 'Rishabh Arora',
            image: 'images/rishabh.jpg',
            description: 'Hey Rockstar. :) Thanks for all your support, cooperation, super cool attitude and parties. Rock on.'
        },
        {
            name: 'Apurva Dehulia',
            image: 'images/apurva.jpg',
            description: 'Thanks you so much for all your support, encouragement and guidance.'
        },
        {
            name: 'Dinesh BM',
            image: 'images/dinesh_bm.jpg',
            description: 'Hey Director. :P It\'s a wonderful journey with you. Don\'t forget to cast me in your first movie. :P'
        },
        {
            name: 'Dinesh Kamat',
            image: 'images/dinesh_kamat.jpg',
            description: 'It\'s a great pleasure working with you. Thanks for your support. All the best.'
        },
        {
            name: 'Mohit Bansal',
            image: 'images/mohit.jpg',
            description: 'I just cannot digest the fact that you had rolled off the from the project and I am working without your presence in team because we started our journey at Accenture from day 1, same batch, same apartments, same project indeed same workstations. It\'s a great journey travelling with you.'
        },
        {
            name: 'Nilima Gavande',
            image: 'images/nilima.jpg',
            description: 'Thanks you so much for all your constant support, encouragement and guidance. Especially for filling our bellies with delicous foods and cheering us all time.'
        },
        {
            name: 'Richa Prasad',
            image: 'images/richa.jpg',
            description: 'Some miracles happen in life without any prior notice. I would have missed it if I hadn\'t participate in interface testing. Learnt a lot from you.  Hope to work together in future assignments.'
        },
        {
            name: 'Suchandrima Das',
            image: 'images/suchi.jpg',
            description: 'It\'s a great pleasure working with you. All the best for your future.'
        },
        {
            name: 'Vivek Trivedi',
            image: 'images/vivek.jpg',
            description: 'Thanks for all the encouragement and support. I had enjoyed a lot under your team sir. '
        },
        {
            name: 'Pratyush Kushwah',
            image: 'images/pratyush.jpg',
            description: 'Aap tho malik hein malik.'
        },
        {
            name: 'Natraj Ramamoorty',
            image: 'images/natraj.jpg',
            description: 'It\'s a great experience working with you. Thanks for all the support and cooperation.'
        },
        {
            name: 'Nikhil Gulati',
            image: 'images/nikhil.jpg',
            description: 'Gullu. It\'s has been wonderful journey. I don\'t want to say thanks because it will be very small word and friends ke beech mein thanks nahi hothe.'
        },
        {
            name: 'Prateek Shinde',
            image: 'images/prateek.jpg',
            description: ':).'
        },
        {
            name: 'Vishal Urankar',
            image: 'images/vishal.jpg',
            description: 'It\'s a great fun working with you. All the best for your future.'
        },
        {
            name: 'Shradhha Lokhande',
            image: 'images/shradha.jpg',
            description: 'It\'s a great pleasure working with you. Have enjoyed every moment. All the best.'
        },
        {
            name: 'Krishna Kapadia',
            image: 'images/krishna.jpg',
            description: 'Thanks Krishna mam for all the support and cooperation.'
        },
        {
            name: 'Karthik Bafna',
            image: 'images/kathik.jpg',
            description: 'Even though it is a short span of working, we had a very good time and parties too. Thanks for everything. Keep rocking.'
        },
        {
            name: 'Himanshu Pandey',
            image: 'images/himanshu.jpg',
            description: 'It\'s great fun working with you. Thanks for everything. All the best for your future.'
        },
        {
            name: 'Deepali Dodamani',
            image: 'images/deepali.jpg',
            description: 'Thanks for your great support. It\'s been memorable journey. You have been a great inspiration for me.'
        },
        {
            name: 'Amit Singh Prakash',
            image: 'images/amit.jpg',
            description: 'Thanks for all the support and cooperation. Thanks for valuable guidance in times of need and making our life easier in the project. '
        },
        {
            name: 'Carol Christine Dias',
            image: 'images/carol.jpg',
            description: 'Thanks for your cooperation. Thanks for instant help whenever I approached. You are the sweetest human being. '
        },
        {
            name: 'Neelkanth Patel',
            image: 'images/neel.jpg',
            description: 'Neel bhai. It\'s pleasure working with you. All the best for your big upcoming life mile stone.'
        },
        {
            name: 'Rohini Govindarajan',
            image: 'images/rohini.jpg',
            description: 'Thanks for your cooperation. I\'m very glad to work with you. Thanks for the sweets and apologies for not returning the same.'
        },
        {
            name: 'Manoj Parlikar',
            image: 'images/manoj.jpg',
            description: 'Thanks for everything. I remember I\'ve always reopened the SORB defect for two months continuously and couple of times changed to major. Thanks for being cool and everytime and it\'s been great inspiration.'
        },
        {
            name: 'Ankush Kshirsagar',
            image: 'images/ankush.jpg',
            description: 'Many many thanks for bearing me in the last few days. It\'s a great pleasure working with you. '
        },
        {
            name: 'Debashish Barik',
            image: 'images/debashish.jpg',
            description: 'It\'s always fun to work with you Deba. Enjoyed a lot while defect fixes, lunches and parties.'
        }
    ];
    return {
        getImages: function () {
            return imagesData
        },
        getDetail: function (name) {
            for (var item in imagesData) {
                if(imagesData[item].name == name) {
                    return imagesData[item]
                } else {

                }
            }
        }
    }
});
