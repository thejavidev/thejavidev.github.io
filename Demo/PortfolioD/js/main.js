const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
var typed = new Typed('.typing-text',{
    strings:['front end developer','font end developer','web developer','web designer'],
    loop:true,
    typeSpeed:150
});
VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max : 25
});

