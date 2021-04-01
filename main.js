"use strict";

const getElement = (selector) => document.querySelector(selector);

const app = getElement("#app");
const item = getElement(".item");

const decrease = getElement(".decrease");
const reset = getElement(".reset");
const increase = getElement(".increase");

const doDecrease = () => item.innerText--;
const doReset = () => item.innerText = 0;
const doIncrease = () => item.innerText++;

const changeClass = () => {
	if (item.innerText > 0) {
		item.setAttribute("positive");
	}

	if (item.innerText < 0) {
		item.setAttribute("class", "negative")
	}
}

decrease.addEventListener("click", doDecrease);
reset.addEventListener("click", doReset);
increase.addEventListener("click", doIncrease);