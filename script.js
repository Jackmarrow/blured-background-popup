const btn = document.querySelector('.btn');
const closeIcon = document.querySelector('.close');
const containerPopup = document.querySelector('.container-popup');
const container = document.querySelector('.container');

btn.addEventListener('click',()=>{
    containerPopup.classList.remove('active');
    container.classList.add('active');
})

closeIcon.addEventListener('click',()=>{
    container.classList.remove('active');
    containerPopup.classList.add('active');
})