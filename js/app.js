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