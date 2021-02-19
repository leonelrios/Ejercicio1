'use strict'

const printNums = () => {

	var numRandoms = getNums();

	const grande = document.querySelector('#grande');
	const medio = document.querySelector('#medio');
	const menor = document.querySelector('#menor');

	numRandoms.sort(function (a, b){
		return a - b;
	});

	grande.innerHTML = numRandoms[2];
	medio.innerHTML = numRandoms[1];
	menor.innerHTML = numRandoms[0];

}

const getNums = () => {
	var a = Math.floor((Math.random() * 1000 + 1));
	var b = Math.floor((Math.random() * 1000 + 1));
	var c = Math.floor((Math.random() * 1000 + 1));

	return [a, b, c];
}

printNums();