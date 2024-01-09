let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
})
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
})

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector("#video-slider").src = src;
    })
})

/* scroll reveal*/
const revealElements = document.querySelectorAll("[data-reveal");

const revealElementsOnScroll = function(){
    len = revealElements.length;
    for(let i=0;i<len;i++){
        if(revealElements[i].getBoundingClientRect().top < window.innerHeight/1.5){
            revealElements[i].classList.add("revealed");
        }
        else{
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll",revealElementsOnScroll);
window.addEventListener("load",revealElementsOnScroll);

