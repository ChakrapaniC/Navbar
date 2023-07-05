const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('#close');
const navbar = document.querySelector('.navbar');

const nav_1 = document.querySelector('.nav-1');
const nav_2 = document.querySelector('.nav-2');
const nav_3 = document.querySelector('.nav-3');
const nav_4 = document.querySelector('.nav-4');

openBtn.addEventListener('click',function(){
    openBtn.style.display = "none";
    closeBtn.style.display = "initial";
    navbar.style.transform = "translateX(0vw)";
    nav_1.style.animation = " any 0.5s linear 0.1s both ";
    nav_2.style.animation = " bny 0.5s linear 0.3s both ";
    nav_3.style.animation = " cny 0.5s linear 0.5s both ";
    nav_4.style.animation = " gny 0.5s linear 0.7s both ";
    

   
})

closeBtn.addEventListener('click',function(){
    openBtn.style.display = "initial";
    closeBtn.style.display = "none";
    navbar.style.transform = "translateX(-100vw)";
    navbar.style.transition = "all 0.8s linear"
    nav_1.style.animation = " hny 0.8s linear 0.3s both ";
    nav_2.style.animation = " iny 0.8s linear 0.2s both ";
    nav_3.style.animation = " jny 0.8s linear 0.1s both ";
    nav_4.style.animation = " kny 0.8s linear 0s both ";
})
