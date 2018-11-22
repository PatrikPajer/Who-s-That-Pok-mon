function setImage() {
let imgUrl = currentPkmn.sprites.front_default;

document.getElementsByClassName("poke-img")
[0].setAttribute("src", imgUrl);
}

function showName () {
document.getElementsByClassName("pokename")
[0].setAttribute("class", "show");
}


window.addEventListener("mousedown", setImage);
