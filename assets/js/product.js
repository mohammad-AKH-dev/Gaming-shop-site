let reviewDescriptionWrapper = document.querySelector('.review-description__wrapper')
let reviewDescriptionSpans = document.querySelectorAll('.review-description__wrapper span')
let descriptionReviewsContents = document.querySelectorAll('.review-description-content__wrapper p')
let relatedGamesWrapper = document.querySelector('.related-games__boxes')
let gameImg = document.querySelector('.information-left img')
let gameTitle = document.querySelector('.information-title')
let gamePrice = document.querySelector('.information__price')
let gameDiscount = document.querySelector('.information__discount')
let gameID = document.querySelector('.Game-id__value')
let productDetailsTitle = document.querySelector('.product-details__title')
let productDetailsName = document.querySelector('.product-details__name')
let urlSearchParams = new URLSearchParams(location.search)

// review and description section

reviewDescriptionWrapper.addEventListener('click',(event)=>{
   
   if(event.target.tagName === 'SPAN'){
        reviewDescriptionSpans.forEach((span)=> {
            span.classList.remove('active')
        })
       event.target.classList.add('active')

    for ( let content of descriptionReviewsContents){
        if(`${content.dataset.name} active` === event.target.className){
           content.classList.add('active')
        }else{
           content.classList.remove('active')
        }
    }
  }
})

// related games section

 
async function getRelatedGames () {
   const response = await fetch('http://localhost:3000/top-categories')
   const data = await response.json()
   const games = data.forEach((game) => {
      relatedGamesWrapper.insertAdjacentHTML('beforeend',`
          <div class="related-game__box">
                <p class="related-game__genre">Action</p>
              <a href="product-details.html?id=${game.id}" class="related-game__link">
              <img src="${game.img}" class="related-game__img">
              </a>
            </div>
        `)
   })
}

// dynamic information

async function dynamicTags () {
   let gameName = Number(urlSearchParams.get('id'))
   if(gameName){
    const response = await fetch(`http://localhost:3000/allGames/${gameName}`)
    const game = await response.json()
      gameImg.src = game.img
      gameTitle.innerHTML = game.title
      gamePrice.innerHTML = `$${game.price}`
      gameDiscount.innerHTML = `$${game.discount}`
      gameID.innerHTML = game.title
      productDetailsTitle.innerHTML = game.title
      productDetailsName.innerHTML = game.title
      productDetailsName.href = `product-details.html?id=${game.id}`
    
   }else {
      gameImg.src = 'assets/images/single-game.jpg'
      gameTitle.innerHTML = 'Call of Duty®: Modern Warfare® II'
      gamePrice.innerHTML = '$28'
      gameDiscount.innerHTML = '$22'
      gameID.innerHTML = 'COD MMII'
      productDetailsTitle.innerHTML = 'Modern Warfare® II'
      productDetailsName.innerHTML = 'Modern Warfare® II'
      productDetailsName.href = `product-details.html`
   }
}


window.addEventListener('load',()=> {
   dynamicTags()
   getRelatedGames()
})