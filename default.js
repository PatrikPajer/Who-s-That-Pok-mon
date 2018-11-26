let currentName = "";
let currentSprite = "";

/*let randomPkmnURL = function () {
	let num = Math.floor(Math.random() * 151);
	return `https://pokeapi.co/api/v2/pokemon/${num}/`;
};*/

function getPkmnData () {
	let tempPKMN = {};
	fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}/`).then(blob => blob.json()).then(data => {
		for(key in data) {
			tempPKMN[key] = data[key];
		}
	});
	currentName = tempPKMN.name;
	currentSprite = tempPKMN.sprites.front_default;
}

getPkmnData();

function setImage () {
	document.getElementsByClassName("poke-img")
	[0].setAttribute("src", currentSprite);
}

setImage();

