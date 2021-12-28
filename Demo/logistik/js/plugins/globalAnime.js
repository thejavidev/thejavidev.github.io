const hero = document.querySelector('.downImag img');

const ship = document.querySelector('.ship img');
const loc1 = document.querySelector('.loc1 img');
const loc2 = document.querySelector('.loc2 img');
const bag = document.querySelector('.bag img');
const home = document.querySelector('.home img');
const train = document.querySelector('.train img');




const tl = new TimelineMax();

tl.fromTo(hero, 3, {width: "0%" }, {x:0, width: "100%" ,else:Power2.easeInOut},"-=1");

tl.fromTo(home, 1.5,{x:160,opacity:0},{x: 0,opacity:1 },"-=1");

tl.fromTo(bag, 1.5,{x: 120,opacity:0},{x: 0,opacity:1 },"-=1");

tl.fromTo(loc1, 1.5,{x:150, opacity:0},{x:0, opacity:1 },"-=1");

tl.fromTo(train, 1.5,{x:150,opacity:0},{x: 0,opacity:1 },"-=1");

tl.fromTo(loc2, 1.5,{x: 150,opacity:0},{x: 0,opacity:1 },"-=1");