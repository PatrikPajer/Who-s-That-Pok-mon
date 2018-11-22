let pkmnNum = Math.floor(Math.random() * 800);
let currentPkmn = {};

var getPokemonData = `https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`;

function namePkmn () {
fetch(getPokemonData).then(blob => blob.json()).then(data => {
	for(let key in data) {
		currentPkmn[key] = data[key];
	}
	console.log(currentPkmn.name);
	console.log(currentPkmn.sprites.front_default);

	pkmnNum = Math.floor(Math.random() * 800);
	getPokemonData = `https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`;

});
}

window.addEventListener("mousedown", namePkmn);

function Pokémon (name, number) {
	this.name = name;
	this.number = number;
}


