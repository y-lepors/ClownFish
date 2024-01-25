var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
let audioOn = true
audio.src = "./assets/song/song.mp3"
audio.volume = 0.1;

document.body.addEventListener("mousemove", function () {
    if(audioOn) audio.play()
})

document.getElementById("audioControl").addEventListener("click", function () {
    if (audio.paused) {
        audio.play()
        audioOn = true
    } else {
        audio.pause()
        audioOn = false
    }
});







const son = document.getElementById('son');

document.addEventListener('click', function() {
    son.play();
});