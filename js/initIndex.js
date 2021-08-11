import { createCard, createHeader, onClickTagsListHeader } from "./utils.js";

export const initIndex = (data) => {
	
	//boucle pour chaque photographes
	data.photographers.forEach(photographer => {
		createCard(photographer);
	});
	
	createHeader(data)
	
	onClickTagsListHeader(data)
};