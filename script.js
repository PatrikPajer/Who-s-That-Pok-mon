let pkmnGen = 151;

function getPokemonData (num) { 
	let pkmnNum = Math.floor(Math.random() * num);
	return `https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`;
}

let currentPkmn = {};

function namePkmn () {
fetch(getPokemonData(pkmnGen)).then(blob => blob.json()).then(data => {
	for(let key in data) {
		currentPkmn[key] = data[key];
	}
	console.log(currentPkmn.name);
});
}

window.addEventListener("mousedown", namePkmn);

namePkmn();
setImage();


