// scrolmagic
function animation(){
    var controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({defaults : {ease : Expo.InOut}});

    t1.fromTo(".home-img",.5,{scale:1,opacity:0},{scale:.9,opacity:1});
    t1.fromTo(".home-img img",.7,{scale:.7,opacity:0},{scale:1,opacity:1});
    t1.fromTo(".home-text",.7,{scale:.9,opacity:0},{scale:1,opacity:1},"-=1");
    t1.fromTo(".btns",.7,{scale:.7,opacity:0},{scale:1,opacity:1},"-=1");
    t1.fromTo("#WAButton",.7,{scale:.9,opacity:0},{scale:1,opacity:1},"-=1");
    t1.fromTo(".toggle-theme",.7,{scale:.9,opacity:0},{scale:1,opacity:1},"-=1");

   new ScrollMagic.Scene({
    triggerElement:"#home",
    triggerHook:.5,
    reverse:false,
})
.setTween(t1)
.addTo(controller)
}
animation();

var typed = new Typed('.typing-text',{
    strings:['Javid Ismayil','A Front-End Developer','A Web Developer','A Web Designer','A Creative Developer'],
    loop:true,
    typeSpeed:150
});