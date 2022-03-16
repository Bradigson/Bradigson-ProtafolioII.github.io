//========================header========================
window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

$(
    function(){
        $('[data-toggle="tooltip"]').tooltip();
    }
)

setTimeout(()=>{

let h1 = document.querySelector("#h1");

h1.style.display="block";
h1.style.animation = "h1 2s forwards";
}, 2000);


//====================animation using scroll=======================
let animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++){
        let alturaScroll = animado[i].offsetTop;
        if(alturaScroll + 150 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("animadodown");
        }
    }
}

window.addEventListener("scroll", mostrarScroll);



