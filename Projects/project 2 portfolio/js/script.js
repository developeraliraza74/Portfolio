// var cursor = document.querySelector("#cursor")
// var heading = document.querySelector("#hero h1")
// var main = document.querySelector("main")
// document.addEventListener("mousemove", function(dets){
//     cursor.style.top = `${dets.clientY -50}px`
//     cursor.style.left = `${dets.clientX - 80}px`
// })

let menu = document.querySelector("#menu")
let menuList = document.querySelector(".menu-list")
menu.addEventListener("click", function () {
    menuList.classList.toggle("block")
})

function open(s) {
    window.location = `${s}.html`
}