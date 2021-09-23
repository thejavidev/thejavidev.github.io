

window.addEventListener("load",function(){

    document.querySelector(".pageloader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".pageloader").style.display="none";
    },600);

})


/* ----------------------- TOGGLE NAVABR ---------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
};

document.addEventListener("click",function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    };
});

/* ----------------------- STICKY HEADER ---------------------*/
window.addEventListener("scroll",function(){
    if(this.pageYOffset>60){
        document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

/* ----------------------- MENU SECTION ---------------------*/
const menuTabs = document.querySelector(".menu-tabs");

menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        /* ----------------------- ANIMATION ---------------------*/
        AOS.init();
    }
});


