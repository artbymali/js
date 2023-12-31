// const imgs = document.querySelectorAll('.img')
// const main_img =  document.querySelector('.main_img')

// imgs.forEach(function (img) {
//     console.log(img);
//     img.addEventListener('click', function(event){
//         console.log(event);
//         console.log(event.target);

//         if(
//             event.target.id === 'img_1' ||
//             event.target.id === 'img_2' ||
//             event.target.id === 'img_3' ||
//             event.target.id === 'img_4'
//             ){
//             main_img.style.background = event
//         }
//     })
    
// })

// const imgs = document.querySelectorAll('.img');
// const main_img = document.querySelector('.main_img');

// imgs.forEach(function (img) {
//     console.log(img);
//     img.addEventListener('click', function(event) {
//         console.log('Clicked image:', event.target.id);
//         console.log('Image source:', event.target.src);

//         if (
//             event.target.id === 'img_1' ||
//             event.target.id === 'img_2' ||
//             event.target.id === 'img_3' ||
//             event.target.id === 'img_4'
//         ) {
//             console.log('Changing background...');
//             main_img.style.background = `url(${event.target.src})`;
//         }
//     });
// });

const imgs = document.querySelectorAll('.img');
const main_img = document.querySelector('.main_img');

imgs.forEach(function (img) {
    img.addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);

        imgs.forEach(function (thumbnail) {
            thumbnail.classList.remove('active');
        });

        img.classList.add('active');

        if (
            event.target.id === 'img_1' ||
            event.target.id === 'img_2' ||
            event.target.id === 'img_3' ||
            event.target.id === 'img_4'
        ) {
            main_img.src = event.target.src;
        }
    });
});
