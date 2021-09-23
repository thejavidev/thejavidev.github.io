window.addEventListener("load",()=>{
    var sr = ScrollReveal({
        distance :'100px',
        duration:2800,
    });
    sr.reveal(`.pih01, .pih02, .pih03, .pih04, .pih05, .pih06`,
    {
        origin:'bottom',
        interval:100,
    });
})