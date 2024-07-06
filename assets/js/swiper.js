
function initSwiper (){
    const swiper = new Swiper('.swiper',{
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        navigation: {
            prevEl:'.prev-btn',
            nextEl:'.next-btn'
        },
        autoplay:true,
        delay:3500,
        speed:1000,
    })
}


export {initSwiper}