// const scroll = new LocomotiveScroll({
//     el: document.querySelector(".wrapper"),
//     smooth: true
// })

let elemContainer = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");
elemContainer.addEventListener("mouseenter", function () {
    // console.log("mouse entered");
    fixedImage.style.display = "block"
})
elemContainer.addEventListener("mouseleave", function () {
    // console.log("mouse leave");
    fixedImage.style.display = "none";
})

let elems = document.querySelectorAll(".elem")
elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        let img = elem.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${img})`
        fixedImage.style.backgroundRepeat = "no-repeat"
    })
})




var fullScr = document.querySelector("#full-scr")
var menu = document.querySelector("#navbar h3")
var navImg = document.querySelector("#navbar img")
var navLinks = document.querySelector("#nav-links")
var full1 = document.querySelector("#full-div-1")
var flag = 0

menu.addEventListener("click", function () {
    if (flag == 0) {
        fullScr.style.top = 0;
        navImg.style.opacity = 0;
        full1.style.display = "block"
        menu.innerText = `✗ Exit`
        flag = 1;
    }
    else {
        fullScr.style.top = "-100%";
        navImg.style.opacity = 1;
        menu.innerText = `☰ Menu`
        full1.style.display = "none"
        flag = 0;
    }
})


var loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);


var fLeft = document.querySelectorAll("#footer .top .left h4");
fLeft[0].onclick = function () {
    console.log(fLeft[0].classList)
    fLeft[0].classList.toggle("active")
    fLeft[1].classList.remove("active")
    fLeft[2].classList.remove("active")
}
fLeft[1].onclick = function () {
    fLeft[0].classList.remove("active")
    fLeft[1].classList.toggle("active")
    fLeft[2].classList.remove("active")
}
fLeft[2].onclick = function () {
    fLeft[0].classList.remove("active")
    fLeft[1].classList.remove("active")
    fLeft[2].classList.toggle("active")
}


window.addEventListener("load", ()=>{
    let video = document.querySelector("#page2video")
    if(video) video.play();
});