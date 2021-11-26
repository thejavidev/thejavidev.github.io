window.addEventListener("load",function(){

	document.querySelector(".pageloader").classList.add("fade-out");
	setTimeout(function(){
		document.querySelector(".pageloader").style.display="none";
       
	},3000);
   
});

$(window).on("scroll",function(){
    if($(this).scrollTop()>90){
        $(".header").addClass("sticky");
    }
    else{
        $(".header").removeClass("sticky");
    }
})


