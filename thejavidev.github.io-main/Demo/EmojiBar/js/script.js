const body = document.querySelector("body");
const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const sliderIcon = document.querySelector(".slidericon")

slider.oninput = ()=>{
    let value = slider.value;
    thumb.style.left = value + '%';
    bar.style.width = value + '%';
    if(value < 20){
        sliderIcon.style.marginTop ="0px";
        body.classList.add("angry");
        body.classList.remove("confuse");
        body.classList.remove("like");
    }
    if(value >= 20){
        sliderIcon.style.marginTop ="-150px";
        body.classList.add("confuse");
        body.classList.remove("angry");
        body.classList.remove("like");
    }
    if(value >= 40){
        sliderIcon.style.marginTop ="-300px";
    }
    if(value >= 60){
        sliderIcon.style.marginTop ="-450px";
        body.classList.add("like");
        body.classList.remove("confuse");
        body.classList.remove("angry");
    }
    if(value >= 80){
        sliderIcon.style.marginTop ="-600px";
    }

}