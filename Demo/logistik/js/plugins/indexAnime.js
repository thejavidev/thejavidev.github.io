
function animation1(){
    const hero = document.querySelector('.downImag img');

const ship = document.querySelector('.ship img');
const tir = document.querySelector('.tir img');
const loc1 = document.querySelector('.loc1 img');

const train = document.querySelector('.train img');
const locat = document.querySelector('.locat img');



const tl = new TimelineMax();

tl.fromTo(hero, 3, {width: "0%" }, {x:0, width: "100%" ,else:Power2.easeInOut},"-=1");

tl.fromTo(ship, 1.5,{x:160,opacity:0},{x: 0,opacity:1 },"-=1");

tl.fromTo(loc1, 1.5,{x: 120,opacity:0},{x: 0,opacity:1 },"-=1");

tl.fromTo(tir, 1.5,{x:150, opacity:0},{x:0, opacity:1 },"-=1");

tl.fromTo(locat, 1.5,{x: 180,opacity:0},{x: 0,opacity:1 },"-=1");

}
animation1();
