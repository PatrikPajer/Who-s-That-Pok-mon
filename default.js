let currentName = "";
let currentSprite = "";

/*let randomPkmnURL = function () {
	let num = Math.floor(Math.random() * 151);
	return `https://pokeapi.co/api/v2/pokemon/${num}/`;
};*/

function getPkmnData () {
	let tempPKMN = {};
	fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}/`).then(blob => blob.json()).then(data => {
		currentName = data["name"];
		currentSprite = data["sprites"]["front_default"];
	});
	console.log(currentName + "/n" + currentSprite);
	setImage();
}

function setImage () {
	document.getElementsByClassName("poke-img")
	[0].setAttribute("src", currentSprite);
}

let image = document.querySelector(".poke-img");

function test () {
	console.log("baf");
	console.log("druhy");
}

image.addEventListener("mousedown", () => {
	getPkmnData();
	test();
})

