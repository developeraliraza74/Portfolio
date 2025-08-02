var arr = [
    { name: "Song 1", url: "./songs/1.mp3", img: "./images/bg1.jpg", duration: "1:55" },
    { name: "Song 2", url: "./songs/2.mp3", img: "./images/bg2.jpg", duration: "2:54" },
    { name: "Song 3", url: "./songs/3.mp3", img: "./images/bg3.jpg", duration: "3:14" },
    { name: "Song 4", url: "./songs/4.mp3", img: "./images/bg4.jpg", duration: "3:23" },
    { name: "Song 5", url: "./songs/5.mp3", img: "./images/bg5.jpg", duration: "3:20" },
    { name: "Song 6", url: "./songs/6.mp3", img: "./images/bg6.jpg", duration: "3:34" }
];
let allSongs = document.querySelector("#all-songs")
let audio = new Audio();
let selectedSong = 0;
let poster = document.querySelector("#left")

var play = document.querySelector("#play")
var back = document.querySelector("#back")
var forward = document.querySelector("#forward")
var pause = document.querySelector(".pause")
console.log(forward)
function addsongs() {
    var clutter = "";
    arr.forEach(function (obj, index) {
        clutter += `<div class="song-card" id= "${index}">
    <div class="part1">
        <img src="${obj.img}" alt="">
        <h4>${obj.name}</h4>
    </div>
    <h6 class="duration">${obj.duration}</h6>
    </div>`;
    })
    allSongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}
addsongs();
allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id;
    play.innerHTML = `<i> Pause </i>`;
    addsongs();
    audio.play();
})
var flag = 0;
play.addEventListener("click", function () {
    if (flag == 0) {
        addsongs();
        audio.play();
        play.innerHTML = `<i> Pause </i>`;
        play.classList.add("pause");
        flag = 1;
    }
    else {
        addsongs();
        play.innerHTML = `<i> Play </i>`;
        play.classList.remove("pause");
        audio.pause();
        flag = 0;
    }
})
// pause.addEventListener("click", function () {
//     audio.pause();
// })
forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        addsongs();
        play.innerHTML = `<i> Pause </i>`;
        audio.play();
        forward.style.opacity = 1;
        back.style.opacity = 1;

    } else {
        forward.style.opacity = 0.4;
        back.style.opacity = 1;
    }
})
back.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--;
        addsongs();
        audio.play();
        play.innerHTML = `<i> Pause </i>`;
        back.style.opacity = 1;
        forward.style.opacity = 1;
    } else {
        back.style.opacity = 0.4;
    }
});
document.addEventListener("keypress", function (key) {
    if (key == "SPACE" || key.code == 32) {
        console.log("Space is pressed")
    }
})