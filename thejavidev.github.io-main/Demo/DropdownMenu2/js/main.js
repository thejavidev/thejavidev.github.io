const card  = document.querySelector(".card");
const cardToggle = document.querySelector(".toggle");

cardToggle.onclick = function(){
    card.classList.toggle('active');
}