let humbergetToggle = document.querySelector('.humbergur_toggle--wrapper')
let mobileMenu = document.querySelector('.mobile-menu')
let mobileMenuList = document.querySelector('.mobile-menu-list')
let humberger = document.querySelector('.hamburger-toggle')
let humbergerAfter = document.querySelector('.hamburger-toggle-after')
let humbergerBefore = document.querySelector('.hamburger-toggle-before')
let header = document.querySelector('.header-menu-section')
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
 