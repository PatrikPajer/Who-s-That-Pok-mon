let pkmnGen = 151;

function pkmnNum (num) { 
	return Math.floor(Math.random() * num);
}

let currentPkmn = {};
let beforePkmn = "";

var getPokemonData = `https://pokeapi.co/api/v2/pokemon/${pkmnNum(pkmnGen)}/`;

function namePkmn () {
fetch(getPokemonData).then(blob => blob.json()).then(data => {
	for(let key in data) {
		currentPkmn[key] = data[key];
	}
	console.log(currentPkmn.name);

	beforePkmn = currentPkmn.name;
	pkmnNum = Math.floor(Math.random() * pkmnGen);
	getPokemonData = `https://pokeapi.co/api/v2/pokemon/${pkmnNum}/`;

});
}

window.addEventListener("mousedown", namePkmn);

function Pokémon (name, number) {
	this.name = name;
	this.number = number;
}


