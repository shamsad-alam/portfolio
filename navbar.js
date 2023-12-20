function myFunction(x) {
    x.classList.toggle("change");
}

function togle2() {
    var nave = document.querySelector("#menu");
    if (nave.style.display == "block") {
        nave.style.display = "none";
    } else {
        nave.style.display = "block";
    }
}


// document.querySelector("#menu li a").classList.add("active");