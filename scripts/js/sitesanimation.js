
function animation(){
    var controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  
    //t1
   t1.fromTo(".section-title",.5,{opacity:0},{opacity:1});
   t1.fromTo(".btns",.7,{x: "-5rem",opacity:0},{x:0,opacity:1});
   t1.fromTo("#searchbar",.7,{opacity:0},{opacity:1},"-=1");
   t1.fromTo(".rowA",.7,{x:"6rem",opacity:0},{x:0,opacity:1},"-=1");
   t1.fromTo(".rowB",.7,{x:"9rem",opacity:0},{x:0,opacity:1},"-=1");
  
   
}
animation();