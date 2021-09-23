const navbar = document.querySelector('.navbar');
const cart = document.querySelector('.cart-items-container');
const search = document.querySelector('.search-form');


document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}
document.querySelector("#cart-btn").onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector("#search-btn").onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}
