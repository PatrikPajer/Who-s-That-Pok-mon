window.addEventListener("mousedown", () => {
	fetch(getPokemonData(pkmnGen)).then(blob => blob.json()).then(data => {
	for(let key in data) {
		currentPkmn[key] = data[key];
	}})
	console.log(currentPkmn.name);
	let imgUrl = currentPkmn.sprites.front_default;

	document.getElementsByClassName("poke-img")
	[0].setAttribute("src", imgUrl);
})