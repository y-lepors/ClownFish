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


function copyToClipboard() {
    navigator.clipboard.writeText("J3nfAaEqiMjUFW9jEXkFHdWSkywS9Rzu78dKbUJBzp2j");
    // Show tooltip
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.visibility = "visible";

    // Hide the tooltip after a delay (e.g., 2 seconds)
    setTimeout(() => {
        tooltip.style.visibility = "hidden";
    }, 2000);
}







const son = document.getElementById('son');

document.addEventListener('click', function() {
    son.play();
});