import { initIndex } from "./initIndex.js";

fetch('./data.json')
	.then(response => {
		return response.json();
	})
	.then(response2 => {
		sessionStorage.setItem('data', JSON.stringify(response2));
		initIndex(response2);
	});