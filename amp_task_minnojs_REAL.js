define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/amp.js'], function(APIConstructor, ampExtension){
    var API = new APIConstructor();

    return ampExtension({
        primeCats : [
{
    nameForFeedback : 'ניטרליות',
    nameForLogging : 'ניטרליות',
    mediaArray : [
        {image: 'car-8607713_1280.jpg'},
        {image: 'chair-270980_1280.jpg'},
        {image: 'cucumbers-3809535_1280.jpg'},
        {image: 'daisies-9547672_1280.jpg'},
        {image: 'forest-1835019_1280.jpg'},
        {image: 'ironing-403074_1280.jpg'},
        {image: 'macbook-459196_1280.jpg'},
        {image: 'mountain-4810958_1280.jpg'},
        {image: 'mountain-8110139_1920.jpg'},
        {image: 'pencil-sharpener-2000622_1280.jpg'}
    ]
},
        {
    nameForFeedback : 'ערוכות',
    nameForLogging : 'ערוכות',
    mediaArray : [
        {image: 'WhatsApp Image 2025-04-21 at 19.15.32 (1).jpeg'},
        {image: 'WhatsApp Image 2025-04-21 at 19.15.32 (2).jpeg'},
        {image: 'WhatsApp Image 2025-04-21 at 19.15.32 (3).jpeg'},
        {image: 'WhatsApp Image 2025-04-21 at 19.15.32.jpeg'},
        {image: 'WhatsApp Image 2025-04-27 at 18.53.44.jpeg'},
        {image: 'WhatsApp Image 2025-04-27 at 18.53.44 (1).jpeg'},
        {image: 'WhatsApp Image 2025-04-27 at 18.53.45.jpeg'},
        {image: 'WhatsApp Image 2025-04-27 at 18.53.45 (1).jpeg'},
        {image: 'WhatsApp Image 2025-04-27 at 18.53.46.jpeg'},
        {image: 'WhatsApp Image 2025-04-27 at 18.56.00.jpeg'}
    ]
},
        {
    nameForFeedback : 'ללא עריכה',
    nameForLogging : 'ללא עריכה',
    mediaArray : [
        {image: 'WhatsApp Image 2025-04-20 at 10.26.11.jpeg'},
        {image: 'WhatsApp Image 2025-04-20 at 10.26.11 (1).jpeg'},
        {image: 'WhatsApp Image 2025-04-20 at 10.26.11 (2).jpeg'},
        {image: 'WhatsApp Image 2025-04-20 at 10.26.12.jpeg'},
        {image: 'hessam-nabavi-ULU4auyoHkU-unsplash.jpg'},
        {image: 'pixabay-topview(1).jpg'},
        {image: 'pixabay-topview.jpg'},
        {image: 'pixabay.jpg'},
        {image: 'trung-nhan-tran-JIVfLyqT0wU-unsplash.jpg'},
        {image: 'לשלוח לזונגמא.jpg'}
    ]
}
        ],
        base_url : {
            image : 'https://raw.githubusercontent.com/mayatzf/amp-task/main'
        },
        targetCats : [
            {
                nameForFeedback : 'מטרה',
                nameForLogging : 'target',
                mediaArray : [
                    {image: 't_neg01.png'},
                    {image: 't_neg02.png'},
                    {image: 't_neg03.png'},
                    {image: 't_neg04.png'},
                    {image: 't_neg05.png'},
                    {image: 't_neg06.png'},
                    {image: 't_neg07.png'},
                    {image: 't_neg08.png'},
                    {image: 't_neg09.png'},
                    {image: 't_neg10.png'},
                    {image: 't_neg11.png'},
                    {image: 't_neg12.png'},
                    {image: 't_neg13.png'},
                    {image: 't_neg14.png'},
                    {image: 't_neg15.png'},
                    {image: 't_neg16.png'},
                    {image: 't_neg17.png'},
                    {image: 't_neg18.png'},
                    {image: 't_neg19.png'},
                    {image: 't_neg20.png'},
                    {image: 't_neg21.png'},
                    {image: 't_neg22.png'},
                    {image: 't_neg23.png'},
                    {image: 't_neg24.png'},
                    {image: 't_neg25.png'},
                    {image: 't_neg26.png'},
                    {image: 't_neg27.png'},
                    {image: 't_neg28.png'},
                    {image: 't_neg29.png'},
                    {image: 't_neg30.png'}
                ]
            }
        ],
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