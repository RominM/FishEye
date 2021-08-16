import { initIndex } from "./initIndex.js";

fetch('./data.json') // le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
// il n'empeche pas, cependant la lecture du fichier
//ici, le fetch demande des information concernant le fichier 'data.json"
	.then(response => { //ici sera decrit sa reponse
		return response.json();
	}) //en attendant cette reponse, on lui demande d'initialiser la response2
	.then(response2 => {
		sessionStorage.setItem('data', JSON.stringify(response2));
		initIndex(response2);
	});
	