const gamesWrapper = document.querySelector('.trending-games__container')
const allPageItemsWrapper = document.querySelector('.pagionation-list')
let allGames = null

// get All games

function getAllGames (start,end){
   
    fetch('http://localhost:3000/allGames')
         .then(res => res.json())
         .then(data => {
            allGames = data
            const copyAllGames = [...allGames]
            copyAllGames.slice(start,end).forEach((game)=> {
                gamesWrapper.insertAdjacentHTML('beforeend',`
                    <div class="col-3 trending-game__wrapper mh-344">
                    <div class="trending-game-img__wrapper">
                        <a href="product-details.html?id=${game.id}"><img src="${game.img}" class="mh-195"></a>
                        <span class="trending-game__discount">
                            <del>$${game.price}</del> 
                            <P>$${game.discount}</P>
                        </span>
                    </div>
                    <div class="trending-game-title__wrapper">
                        <p class="trending-game__kind">${game.kind}</p>
                        <div class="trending-game__title title-flex">
                            <p class="fs-1-4">${game.title}</p>
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
            window.scrollTo(0, 1200);
         })
}

// get filltered games

const ordinationItems = document.querySelector('.main-ordination__wrapper')
ordinationItems.addEventListener('click',(event)=>{
    console.log(event.target.tagName)
    if(event.target.tagName === "SPAN"){
        fillterGames(event.target)
    }
})


function fillterGames (item){
       ordinationItems.querySelectorAll('.main-ordination__item').forEach(span => span.classList.remove('active'))
      item.classList.add('active')
    gamesWrapper.innerHTML = ''
    let copyAllGames = [...allGames]
   let newCopyAllGames = copyAllGames.filter(game => {
        if(item.innerHTML === "Show All"){
            return copyAllGames.splice(12)
        }else{
            return game.kind === item.innerHTML
        }
    })
   console.log(newCopyAllGames)
   newCopyAllGames.forEach(game => {
      gamesWrapper.insertAdjacentHTML('beforeend',`
        <div class="col-3 trending-game__wrapper mh-344">
                    <div class="trending-game-img__wrapper">
                        <a href="product-details.html?id=${game.id}"><img src="${game.img}" class="mh-195"></a>
                        <span class="trending-game__discount">
                            <del>$${game.price}</del> 
                            <P>$${game.discount}</P>
                        </span>
                    </div>
                    <div class="trending-game-title__wrapper">
                        <p class="trending-game__kind">${game.kind}</p>
                        <div class="trending-game__title title-flex">
                            <p class="fs-1-4">${game.title}</p>
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
}


// pagination Lugic


allPageItemsWrapper.addEventListener('click',(event)=> {
    if(event.target.tagName === 'LI'){
        allPageItemsWrapper.querySelectorAll('.pagination-item')
        .forEach((page) => page.classList.remove('active'))
        handleItemsWithPagination(event.target)
    }
})

let currentPage = 1
let rows = 6
let currentItem = null

function handleItemsWithPagination (target){
    target.classList.add('active')
   
    if(target.className.match('pagination-item--prev')){
        currentPage = currentPage - 1
        if(currentPage === 0){
            currentPage = 3
        }
        target.classList.remove('active')
        allPageItemsWrapper.querySelectorAll('.pagination-item')
        .forEach((page) => {
            if(+page.innerHTML === currentPage){
                page.classList.add('active')
            }
        })
        
    }else if (target.className.match('pagination-item--next')){
        currentPage = currentPage + 1
        if(currentPage === 4){
            currentPage = 1
        }
        target.classList.remove('active')
        allPageItemsWrapper.querySelectorAll('.pagination-item')
        .forEach((page) => {
            if(+page.innerHTML === currentPage){
                page.classList.add('active')
            }
        })
        
    }else{
        currentItem = target.value
        currentPage = currentItem
    }
    
    let end = currentPage * rows
    let start = end - rows


    gamesWrapper.innerHTML = ''
    getAllGames(start,end)

}

window.addEventListener('load',()=> {
    getAllGames(0,12)
})