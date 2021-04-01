"use strict";

const getElement = (selector) => document.querySelector(selector);

const app = getElement("#app");
const item = getElement(".item");

let count = 0;

const change = (e) => {
	if (e.target.className === "decrease") {
		count--;
	}
	if (e.target.className === "increase") {
		count++;
	}
	if (e.target.className === "reset") {
		count = 0;
	}
	
	item.innerText = count;

	if (count > 0) {
		item.style.color = "#3feb14";
	}
	if (count < 0) {
		item.style.color = "#e40909";
	}
	if (count === 0) {
		item.style.color = "#222";
	}
}

app.addEventListener("click", change);