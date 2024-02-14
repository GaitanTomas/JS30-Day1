// PLAY SOUND BY KEY
window.addEventListener("keydown", playSound);
function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add("playing")
    audio.currentTime = 0
    audio.play()
}

// REMOVE ANIMATION
window.addEventListener("keyup", remove);

function remove(e){
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.remove("playing")
}

