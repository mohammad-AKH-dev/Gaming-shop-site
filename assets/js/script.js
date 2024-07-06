import { initSwiper } from "./swiper.js"

let humbergetToggle = document.querySelector('.humbergur_toggle--wrapper')
let mobileMenu = document.querySelector('.mobile-menu')
let mobileMenuList = document.querySelector('.mobile-menu-list')
let humberger = document.querySelector('.hamburger-toggle')
let humbergerAfter = document.querySelector('.hamburger-toggle-after')
let humbergerBefore = document.querySelector('.hamburger-toggle-before')
let header = document.querySelector('.header-menu-section')
const trendingGamesContainer = document.querySelector('.trending-games__container')
const mostPlayedGamesContainer = document.querySelector('.mostplayed-games__wrapper')
const topCategoriesContainer = document.querySelector('.Top-Categories__wrapper')
let flag = false

//  humburger toggle feature

humbergetToggle.addEventListener('click',()=>{
      if(!flag){
        flag = true
        humbergerAfter.classList.add('rotateReset')
        humbergerBefore.classList.add('rotate')
        humberger.style.display = 'none'
        mobileMenuList.classList.remove('hide')
        mobileMenu.classList.remove('hide')
      }else{
        flag = false
        humbergerBefore.classList.remove('rotate')
        humbergerAfter.classList.remove('rotateReset')
        humberger.style.display = 'block'
        mobileMenuList.classList.add('hide')
        mobileMenu.classList.add('hide')
      }
})

//     sticy scroll feature

   window.addEventListener('scroll',()=>{
         
         if(window.scrollY > 400){
              header.classList.add('active')
              if(humberger.style.display === 'none'){
                mobileMenuList.classList.remove('hide')
                mobileMenu.classList.remove('hide')
              }else{
                mobileMenuList.classList.add('hide')
                mobileMenu.classList.add('hide')
              }
              
         }else{
               header.classList.remove('active')
         }
         
   })
   

  //  getting trending Games feature


   const getTrendingGames = async () => {
    try {
      const response = await fetch('http://localhost:3000/trending Games')
      const trendingGames = await response.json()
      let data = trendingGames.forEach((game) => {
           trendingGamesContainer.insertAdjacentHTML('beforeend',`
                <div class="trending-game__wrapper">
                      <div class="trending-game-img__wrapper">
                          <a href="#"><img src="${game.img}"></a>
                          <span class="trending-game__discount">
                             ${game.discount > 0 ? `<del>$${game.discount}</del> <P>$${game.price}</P>`
                              :`<p class="no-discount">$${game.price}</p>`}
                          </span>
                      </div>
                      <div class="trending-game-title__wrapper">
                          <p class="trending-game__kind">Action</p>
                          <div class="trending-game__title">
                              <p>${game.title}</p>
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                      <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                                    </svg>  
                              </div>                                
                          </div>
                      </div>
                  </div>
            `)
      })
    } catch (error) {
      console.log('لطفا سرور را ران کنید')
    }
   }


  //  init slider from json server (most played games section)

   const gettingMostPlayedGames = async () => {
      const response = await fetch('http://localhost:3000/mostPlayed-games')
      const data = await response.json()

      data.forEach((game)=> {
        mostPlayedGamesContainer.insertAdjacentHTML('beforeend',`
          <div class="swiper-slide mostplayed__game">
                        <div class="mostplayed-game-img__wrapper">
                            <a href="#"><img src="${game.img}" loading="lazy" class="mostplayed-game__img"></a>
                        </div>
                        <p class="mostplayed-game__kind">${game.kind}</p>
                        <h3 class="mostplayed-game__title">${game.title}</h3>
                        <a href="#" class="mostplayed-game-link">EXPLORE</a>
                      </div>
          `)
      })
      initSwiper()
   }

   

  //  getting top categories games feature

  const getTopCategories = async () => {
     const response = await fetch('http://localhost:3000/top-categories')
     const topCategories = await response.json()
     const data = topCategories.forEach((category) => {
           topCategoriesContainer.insertAdjacentHTML('beforeend',`
            <div class="Top-Category">
                        <p class="Top-Category__kind">Action</p>
                        <img src="${category.img}" class="Top-Category__img">
                    </div>
            `)
     })
  }



   window.addEventListener('load', ()=>{
       getTrendingGames()
       gettingMostPlayedGames()
       getTopCategories()
   })
    
