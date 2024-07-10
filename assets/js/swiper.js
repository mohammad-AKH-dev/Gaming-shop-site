
function initSwiper (){
    const swiper = new Swiper('.swiper',{
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            prevEl:'.prev-btn',
            nextEl:'.next-btn'
        },
        autoplay:true,
        delay:3500,
        speed:1000,
        breakpoints:{
            0: {
                slidesPerView : 1,
            },
            520:{
                slidesPerView : 2,
            },
            750:{
                slidesPerView : 2.5,
            },
            920: {
                slidesPerView : 3
            },
            1150: {
                slidesPerView : 4
            },
            1450: {
                slidesPerView: 5
            }
        }
    })
}


export {initSwiper}