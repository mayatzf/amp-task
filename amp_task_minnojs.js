define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/amp.js'], function(APIConstructor, ampExtension){
    var API = new APIConstructor();

    return ampExtension({
        category1 : {
            name : 'חמים',
            title : {
                media : {word : 'חמים'},
                css : {color:'#31b404','font-size':'2em'},
                height : 4
            },
            stimulusMedia : [
                {image : 'חם1.jpg'},
                {image : 'חם2.jpg'},
                {image : 'חם3.jpg'},
                {image : 'חם4.jpg'},
                {image : 'חם5.jpg'},
                {image : 'חם6.jpg'},
                {image : 'חם7.jpg'},
                {image : 'חם8.jpg'},
                {image : 'חם9.jpg'},
                {image : 'חם10.jpg'}
            ],
            stimulusCss : {color:'#31b404','font-size':'1.8em'}
        },
        category2 : {
            name : 'קרים',
            title : {
                media : {word : 'קרים'},
                css : {color:'#0000FF','font-size':'2em'},
                height : 4
            },
            stimulusMedia : [
                {image : 'קר1.jpg'},
                {image : 'קר2.jpg'},
                {image : 'קר3.jpg'},
                {image : 'קר4.jpg'},
                {image : 'קר5.jpg'},
                {image : 'קר6.jpg'},
                {image : 'קר7.jpg'},
                {image : 'קר8.jpg'},
                {image : 'קר9.jpg'},
                {image : 'קר10.jpg'}
            ],
            stimulusCss : {color:'#0000FF','font-size':'1.8em'}
        },
        primeCats : [
            {nameForFeedback : 'ניטרלי', nameForLogging : 'ניטרלי', mediaArray : [
                {image: 'ניטרלי1.jpg'}, {image: 'ניטרלי2.jpg'}, {image: 'ניטרלי3.jpg'}, 
                {image: 'ניטרלי4.jpg'}, {image: 'ניטרלי5.jpg'}, {image: 'ניטרלי6.jpg'}, 
                {image: 'ניטרלי7.jpg'}, {image: 'ניטרלי8.jpg'}, {image: 'ניטרלי9.jpg'}, 
                {image: 'ניטרלי10.jpg'}
            ]},
            {nameForFeedback : 'ערוכות', nameForLogging : 'ערוכות', mediaArray : [
                {image: 'ערוכות1.jpg'}, {image: 'ערוכות2.jpg'}, {image: 'ערוכות3.jpg'}, 
                {image: 'ערוכות4.jpg'}, {image: 'ערוכות5.jpg'}, {image: 'ערוכות6.jpg'}, 
                {image: 'ערוכות7.jpg'}, {image: 'ערוכות8.jpg'}, {image: 'ערוכות9.jpg'}, 
                {image: 'ערוכות10.jpg'}
            ]},
            {nameForFeedback : 'ללא עריכה', nameForLogging : 'ללא עריכה', mediaArray : [
                {image: 'חם1.jpg'}, {image: 'חם2.jpg'}, {image: 'חם3.jpg'}, {image: 'חם4.jpg'},
                {image: 'חם5.jpg'}, {image: 'חם6.jpg'}, {image: 'חם7.jpg'}, {image: 'חם8.jpg'},
                {image: 'חם9.jpg'}, {image: 'חם10.jpg'}
            ]}
        ],
        base_url : {
            image : 'https://raw.githubusercontent.com/mayatzf/amp-task/main'
        },
        trialsInBlock : 30,
        fixationDuration : 100,
        primeDuration : 300,
        targetDuration : 500,
        maskDuration : 100,
        ITIDuration : 250,
        responses : [
            {key: 'e', text: 'קר מאוד'},
            {key: 'r', text: 'קר'},
            {key: 'i', text: 'חם'},
            {key: 'o', text: 'חם מאוד'}
        ]
    });
});