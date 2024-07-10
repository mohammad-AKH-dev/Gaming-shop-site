let reviewDescriptionWrapper = document.querySelector('.review-description__wrapper')
let reviewDescriptionSpans = document.querySelectorAll('.review-description__wrapper span')
let descriptionReviewsContents = document.querySelectorAll('.review-description-content__wrapper p')

reviewDescriptionWrapper.addEventListener('click',(event)=>{
    reviewDescriptionSpans.forEach((span)=> {
        span.classList.remove('active')
    })
     
     if(event.target.tagName === 'SPAN'){
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